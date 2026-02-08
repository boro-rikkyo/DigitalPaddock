const setupDownloadButton = () => {
    const downloadButton = document.querySelector(".download-button") as HTMLElement
    const dropdown = document.querySelector(".download-dropdown") as HTMLElement
    const pdfButton = document.querySelector("#download-pdf") as HTMLButtonElement

    if (downloadButton && dropdown) {
        downloadButton.addEventListener("click", (e) => {
            e.stopPropagation()
            dropdown.classList.toggle("show")
        })

        document.addEventListener("click", (e) => {
            if (!downloadButton.contains(e.target as Node)) {
                dropdown.classList.remove("show")
            }
        })
    }

    if (pdfButton) {
        pdfButton.addEventListener("click", () => {
            window.print()
        })
    }
}

document.addEventListener("nav", setupDownloadButton)
window.addEventListener("DOMContentLoaded", setupDownloadButton)
