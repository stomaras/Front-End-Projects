class TestData:
    CHROME_EXECUTABLE_PATH = "C:\BrowserDriver\chromedriver.exe"
    BASE_URL = "https://app.hubspot.com/login"

    USER_NAME = "naveenanimation30@gmail.com"
    PASSWORD = "Selenium@12345"

    LOGIN_PAGE_TITLE = "HubSpot Login"


"""In order to see if html execute right we install 
    1) pip install pytest-html
    2) pytest Tests/test_LoginPage.py -v --html=./hubSpot.html
    
    In order to run test in parallel browsers :
    
    1) pip install pytest-xdist
    
    2) pytest Tests/test_LoginPage.py -v -n 3 --html=./hubSpot.html 
    
"""
