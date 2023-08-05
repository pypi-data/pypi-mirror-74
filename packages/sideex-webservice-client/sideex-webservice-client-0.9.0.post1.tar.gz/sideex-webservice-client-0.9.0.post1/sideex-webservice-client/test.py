#Include the Client API lib
import asyncio
import aiohttp
import json
SideeXWebServiceClientAPI = __import__("sideex-webservice-client").SideeXWebServiceClientAPI
ProtocalType = __import__("sideex-webservice-client").ProtocalType

async def delay(time):
    await asyncio.sleep(time)

if __name__=="__main__":
    #Connect to a SideeX WebService server
    print(SideeXWebServiceClientAPI)
    ws_client = SideeXWebServiceClientAPI('http://127.0.0.1:50000', ProtocalType.HTTP)
    file = open('testcase.zip','rb')
    
    token = json.loads(asyncio.run(ws_client.runTestSuite(file)))['token']# get the token
    flag = False

    #Check the execution state every 2 seconds
    while not flag:

        #Get the current state
        state = json.loads(asyncio.run(ws_client.getState(token)))['webservice']['state']# get the WebService current state
        if (state != "complete" and state != "error"):
            print(state)
            asyncio.run(delay(2))
        #If test is error
        elif state == "error":
            flag = True
        #If test is complete
        else:
            print(state)
            froamData = aiohttp.FormData()
            froamData.add_field('token', token, content_type='application/x-www-form-urlencoded')
            froamData.add_field('file', "reports.zip", content_type='application/x-www-form-urlencoded')
            #download the test report to the target file path
            asyncio.run(ws_client.download( froamData, "./reports.zip", 0))

            #Download the logs
            froamData = aiohttp.FormData()
            froamData.add_field('token', token, content_type='application/x-www-form-urlencoded')
            asyncio.run(ws_client.download( froamData, "./logs.zip", 1))

            #Delete the test case and report from the server
            print(asyncio.run(ws_client.deleteReport(token)))

            flag = True
