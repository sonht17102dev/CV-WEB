let title = document.querySelector("h1");

/**
 * Nếu click vào project nào sẽ hiển thị thông tin project đấy
 * dựa trên param của url thẻ a.
 */
if (document.location.href.includes("project-pets")) {
  let all = document.querySelectorAll(".pets");
  //Thay đổi tiêu đề project Pets
  title.innerHTML = "Project Chapter - PETS WEB";
  //Thay đổi nội dung bằng cách xoá class hidden
  all.forEach((item) => {
    item.classList.remove("hidden");
  });
} else if (document.location.href.includes("project-cv")) {
  let all = document.querySelectorAll(".cv");
  //Thay đổi tiêu đề project CV
  title.innerHTML = "Project Chapter - CV WEB";
  //Thay đổi nội dung bằng cách xoá class hidden
  all.forEach((item) => {
    item.classList.remove("hidden");
  });
} else if (document.location.href.includes("project-news")) {
  let all = document.querySelectorAll(".news");
  //Thay đổi tiêu đề project news
  title.innerHTML = "Project Chapter - NEWS WEB";
  //Thay đổi nội dung bằng cách xoá class hidden
  all.forEach((item) => {
    item.classList.remove("hidden");
  });
}
