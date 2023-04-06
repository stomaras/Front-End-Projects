import time

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

s = Service('C:\BrowserDriver\chromedriver.exe')
driver = webdriver.Chrome(service=s)

driver.find_element(By.ID,"small-searchterms").send_keys("Lenovo ThinkPad X1 Carbon Laptop")

driver.get("https://demo.nopcommerce.com/")
driver.maximize_window()
time.sleep(2)