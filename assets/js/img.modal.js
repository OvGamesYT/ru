// Get the modal
function onclickimg(id, caption) {
    consloe.log(id + " " + caption)
    var modal = document.getElementById("OvgImgModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById(id);
    var modalImg = document.getElementById("OvgModalImg");
    var captionText = document.getElementById("OvgCaption");
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("OvgClose")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}