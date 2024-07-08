const tbody = document.querySelector("tbody");
tbody.innerHTML = "";

// 生成9個表格行
for (let i = 0; i < 9; i++) {
  const row = `
    <tr class="table__row">
      <td class="table__cell"><input type="checkbox"></td>
      <td class="table__cell">ID ${i + 1}</td>
      <td class="table__cell">Name ${i + 1}</td>
      <td class="table__cell">
        <div>Advertiser ${i + 1}</div>
        <div>Group</div>
      </td>
      <td class="table__cell">Description ${i + 1}</td>
      <td class="table__cell">$${(i + 1) * 100}</td>
      <td class="table__cell">09:00</td>
      <td class="table__cell">17:00</td>
      <td class="table__cell table__cell--action">
        <img class="cell__action__icon" id="actionIcon${i + 1}"
             src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/menu.svg"
             alt="">
        <div class="action__menu hidden" id="actionMenu${
          i + 1
        }" role="dialog" aria-modal="true">
          <div class="menu__body">
            <div class="menu__item">
              <img class="menu__item__icon"
                   src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/duplicate.svg"
                   alt="">
              <span>Duplicate</span>
            </div>
            <div class="menu__item">
              <img class="menu__item__icon"
                   src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/edit.svg"
                   alt="">
              <span>Edit</span>
            </div>
            <div class="menu__item">
              <img class="menu__item__icon"
                   src="https://raw.githubusercontent.com/WendellLiu/alphacamp-frontend-course/master/data-table/static/icons/delete.svg"
                   alt="">
              <span>Delete</span>
            </div>
          </div>
        </div>
      </td>
    </tr>
  `;
  tbody.innerHTML += row;
}

// 為每個 action icon 添加事件監聽器
for (let i = 1; i <= 9; i++) {
  const actionIcon = document.getElementById(`actionIcon${i}`);
  const actionMenu = document.getElementById(`actionMenu${i}`);

  actionIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // 防止點擊事件冒泡
    actionMenu.classList.toggle("hidden");
  });
}

// 點擊頁面其他地方時關閉打開的菜單
document.addEventListener("click", () => {
  const openMenus = document.querySelectorAll(".action__menu:not(.hidden)");
  openMenus.forEach((menu) => menu.classList.add("hidden"));
});

// dark mode
// target the switch element
const darkModeToggle = document.querySelector(
  ".sidebar__icons--darkmode-input"
);
const darkModeToggleHandler = (e) => {
  console.log("start");
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    console.log(documentElement, ":done");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    console.log("wrong");
  }
};

darkModeToggle.addEventListener("change", darkModeToggleHandler);
