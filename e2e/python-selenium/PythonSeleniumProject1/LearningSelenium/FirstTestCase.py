# Test Case
# 1) Open the web browser
# 2) Open URL https://opensource-demo.orangehrmlive.com/
# 3) Enter Username (Admin)
# 4) Enter password (admin123)
# 5) Click on Login.
# 6) Capture title of the home page. (Actual title)
# 7) Verify title of the page: OrangeHRM (Expected)
# 8) Close Browser

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

s = Service('C:\BrowserDriver\chromedriver.exe')
driver = webdriver.Chrome(service=s)

driver.get('https://opensource-demo.orangehrmlive.com/')

driver.maximize_window()

driver.find_element(by=By.NAME, value="username").send_keys("Admin")
driver.find_element(by=By.NAME, value="password").send_keys("admin123")

driver.close()