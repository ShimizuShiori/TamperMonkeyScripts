// ==UserScript==
// @name         Test Results Enhancement
// @namespace    https://github.com/ShimizuShiori/TamperMonkeyScripts/blob/main/Wtg/TestResultsEnhancement.user.js
// @version      1.2
// @description  Add some external operations to Test Results Page
// @author       Felix Fei
// @match        http://crikey.wtg.zone/TestResults/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wtg.zone
// @updateURL    https://github.com/ShimizuShiori/TamperMonkeyScripts/blob/main/Wtg/TestResultsEnhancement.user.js
// @downloadURL  https://github.com/ShimizuShiori/TamperMonkeyScripts/blob/main/Wtg/TestResultsEnhancement.user.js
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
