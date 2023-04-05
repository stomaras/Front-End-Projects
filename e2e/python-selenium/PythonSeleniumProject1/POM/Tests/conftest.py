import pytest
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from webdriver_manager.firefox import GeckoDriverManager
from POM.Config.config import TestData


@pytest.fixture(params=["chrome"], scope="class")
def init_driver(request):
    if request.param == "chrome":
        s = Service(TestData.CHROME_EXECUTABLE_PATH)
        web_driver = webdriver.Chrome(service=s)
    request.cls.driver = web_driver
    yield
    web_driver.close()
