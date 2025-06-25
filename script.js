function openTab(tabId) {
	const tabs = document.getElementsByClassName('tab-content');
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove('active');
	}
	document.getElementById(tabId).classList.add('active');
}
