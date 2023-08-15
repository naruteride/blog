"use client"

export default function NavButton() {
    function handleNavigator() {
        document.querySelector("nav")?.classList.toggle("active");
        let background = document.querySelector("#background");
        background?.classList.toggle("active");
        background?.addEventListener("click", handleNavigator);
    };

    return <>
        <button onClick={handleNavigator}>
            ☰
        </button>
    </>
}