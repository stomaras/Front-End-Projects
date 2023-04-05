from selenium import webdriver
from selenium.webdriver.chrome.service import Service

s = Service('C:\BrowserDriver\chromedriver.exe')
driver = webdriver.Chrome(service=s)

driver.get("https://www.rvcacademy.com")
driver.maximize_window()
print(driver.title)

driver.close()