document.addEventListener("DOMContentLoaded", () => {
    const certificates = document.querySelectorAll(".all-cer > div"); // Select all certificate divs

    certificates.forEach(certificate => {
        const img = certificate.querySelector("img");
        const subText = certificate.querySelector(".sub");

        if (img && subText) {
            img.addEventListener("click", () => {
                // Create a modal container
                const modal = document.createElement("div");
                modal.style.position = "fixed";
                modal.style.top = "0";
                modal.style.left = "0";
                modal.style.width = "100%"; // Set width to 80%
                modal.style.height = "100%";
                modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; 
                modal.style.backdropFilter = "blur(2px)"; // Optional: Add a blur effect to the background
                modal.style.display = "flex";
                modal.style.justifyContent = "center";
                modal.style.alignItems = "center";
                modal.style.zIndex = "1002";
            

                // Create a content box
                const contentBox = document.createElement("div");
                contentBox.style.backgroundColor = "#18181b";
                contentBox.style.padding = "20px";
                contentBox.style.borderRadius = "8px";
                // contentBox.style.boxShadow = "4px 4px 4px rgba(255, 255, 255, 0.3)";
                contentBox.style.border = "2px solid rgba(255, 255, 255, 0.3)"; // Optional: Add a border to the content box
                contentBox.style.maxWidth = "80%";
                contentBox.style.alignItems = "center";
                contentBox.style.textAlign = "center";
                contentBox.style.display = "flex";
                contentBox.style.flexDirection = "column";
                contentBox.style.gap = "10px";
                contentBox.style.width = "800px"; // Set text color to white

                // Add the image to the content box
                const modalImage = document.createElement("img");
                modalImage.src = img.src; // Use the same image source
                modalImage.style.maxWidth = "60%";
                modalImage.style.borderRadius = "8px";
                modalImage.style.marginBottom = "10px";
                contentBox.appendChild(modalImage);

                // Add the sub text to the content box
                const subContent = document.createElement("p");
                subContent.textContent = subText.textContent;
                subContent.style.fontSize = "16px";
                subContent.style.color = "#fff";
                contentBox.appendChild(subContent);
                contentBox.style.fontFamily = "Anuphan, sans-serif"; // Set text color to white

                // Add a close button
                const closeButton = document.createElement("button");
                closeButton.textContent = "Close";
                closeButton.style.marginTop = "10px";
                closeButton.style.padding = "10px 20px";
                closeButton.style.border = "none";
                closeButton.style.borderRadius = "4px";
                closeButton.style.backgroundColor = "#f44336";
                closeButton.style.color = "#fff";
                closeButton.style.cursor = "pointer";
                closeButton.style.fontSize = "16px";

                closeButton.addEventListener("click", () => {
                    document.body.removeChild(modal);
                });

                contentBox.appendChild(closeButton);
                modal.appendChild(contentBox);
                document.body.appendChild(modal);
            });
        }
    });
});
