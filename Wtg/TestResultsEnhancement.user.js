// ==UserScript==
// @name         Test Results Enhancement
// @namespace    https://devops.wisetechglobal.com/wtg/InternalTools/_git/WtgScripts?path=%2Fsrc%2FTamperMonkeyScripts%2FTestResultsEnhancement.user.js&version=GBmaster
// @version      1.2
// @description  Add some external operations to Test Results Page
// @author       Felix Fei
// @match        http://crikey.wtg.zone/TestResults/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wtg.zone
// @updateURL    https://devops.wisetechglobal.com/wtg/6b48d534-abdb-4757-9030-2a7e7ad8af5d/_apis/git/repositories/37047baf-b1d4-47e6-92ff-1d8f056ebb53/items?path=%2Fsrc%2FTamperMonkeyScripts%2FTestResultsEnhancement.user.js&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true
// @downloadURL  https://devops.wisetechglobal.com/wtg/6b48d534-abdb-4757-9030-2a7e7ad8af5d/_apis/git/repositories/37047baf-b1d4-47e6-92ff-1d8f056ebb53/items?path=%2Fsrc%2FTamperMonkeyScripts%2FTestResultsEnhancement.user.js&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true
// @grant        none
// ==/UserScript==



(function() {
    'use strict';

    const menus = [
        {
            text: "All",
            click: () => {
                for(const ele of document.querySelectorAll("#test-results-target-tiles .c-tile")) {
                    ele.style.display = "";
                }
            }
        },
        {
            text: "Rejected",
            click: () => {
                for(const ele of document.querySelectorAll("#test-results-target-tiles .c-tile")) {
                    if(!ele.querySelector(".test-status-result-bad"))
                        ele.style.display = "none";
                }
            }
        }
    ];

    const menuContainerTemp = '<tr><th>Filter</th><td><div class="table-cell-container" id="menuContainer"></div></td></tr>';

    const links = [];
    document.querySelector("#test-result-summary-table tbody").innerHTML += menuContainerTemp;

    for(const menu of menus){
        const link = document.createElement("a");
        link.className = "c-test-title";
        link.innerText = menu.text;
        link.style.marginRight = "5px"
        link.href = "#";
        link.addEventListener("click", menu.click);
        document.querySelector("#menuContainer").appendChild(link);
    }
})();
