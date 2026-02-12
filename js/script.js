const themeToggle = document.getElementById("dark-mode-toggle");
const savedTheme = localStorage.getItem("theme");
const menuToggleButton = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

const applyTheme = (isDarkMode) => {
	document.body.classList.toggle("dark-mode", isDarkMode);
	themeToggle.checked = !isDarkMode;
};

applyTheme(savedTheme === "dark");

themeToggle.addEventListener("change", () => {
	const isDarkMode = !themeToggle.checked;
	applyTheme(isDarkMode);
	localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

if (menuToggleButton && mobileMenu) {
	const closeMenu = () => {
		document.body.classList.remove("menu-open");
		menuToggleButton.setAttribute("aria-expanded", "false");
	};

	menuToggleButton.addEventListener("click", () => {
		const isOpen = document.body.classList.toggle("menu-open");
		menuToggleButton.setAttribute("aria-expanded", String(isOpen));
	});

	mobileMenu.querySelectorAll("a").forEach((navLink) => {
		navLink.addEventListener("click", closeMenu);
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 640) {
			closeMenu();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeMenu();
		}
	});
}
