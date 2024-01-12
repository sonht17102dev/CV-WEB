"use strict";
const myDiv = document.getElementById("mydiv");
const btnSubmit = document.getElementById("btnSubmit");
const formInfo = document.getElementById("formInfo");
const inputValue = document.getElementById("email");
const emailHelp = document.getElementById("emailHelp");
const infomation = document.getElementById("infomation");
const btnViewMore = document.querySelectorAll(".btnViewMore");

/**
 * Hàm showButton xoá class hidden cho sự kiện onmouseover
 * @param button sử dụng this để target button khi người dùng click vào
 */
const showButton = (button) => {
  button.childNodes[0].nextSibling.childNodes[3].classList.remove("hidden");
};
/**
 * Hàm hideButton thêm class hidden cho sự kiện onmouseout
 * @param button sử dụng this để target button khi người dùng click vào
 */
const hideButton = (button) => {
  button.childNodes[0].nextSibling.childNodes[3].classList.add("hidden");
};

/**
 * Hàm toggleContent xử lý hiển thị View less, view more 
 * sự kiện onclick
 * @param {*} button sử dụng this để target button khi người dùng click vào
 */
const toggleContent = (button) => {
  const contentDiv = button.parentNode.parentNode.nextElementSibling;
  button.innerHTML = "View Less";
  contentDiv.classList.toggle("hidden");
  if (contentDiv.classList.contains("hidden")) {
    button.innerHTML = '<i class="bi bi-caret-down px-1"></i>View More';
  }
};

/**
 * Hàm submitHandler xử lý sự kiện click vào nút submit trên form xác thực
 * Sử dụng regex kiểm tra chuỗi input 
 */
const submitHandler = (event) => {
  event.preventDefault();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const enterInput = inputValue.value;
  // Kiểm tra người dùng nhập vào có phải email và người dùng có để trống hay không
  if (!regex.test(enterInput) || enterInput.trim().length === 0) {
    // Hiển thị thông báo lỗi
    emailHelp.innerHTML =
      "Vui lòng nhập đúng định dạng email hoặc email không được để trống";
    emailHelp.classList.add("text-danger");
    return;
  }
  // Khi nhập đúng kiểu email sẽ hiển thị lý lịch người dùng 
  // và giấu form đi.
  infomation.classList.remove("hidden");
  formInfo.classList.add("hidden");
};

btnSubmit.addEventListener("click", submitHandler);
