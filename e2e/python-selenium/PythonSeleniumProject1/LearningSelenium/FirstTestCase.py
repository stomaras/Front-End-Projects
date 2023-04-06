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
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

s = Service('C:\BrowserDriver\chromedriver.exe')
driver = webdriver.Chrome(service=s)

driver.get('https://opensource-demo.orangehrmlive.com/')
wait = WebDriverWait(driver, 5)
driver.maximize_window()
try:
    element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.NAME, "username")))
finally:
    driver.quit()


driver.find_element(by=By.NAME, value="username").send_keys("Admin")
driver.find_element(by=By.NAME, value="password").send_keys("admin123")

driver.close()