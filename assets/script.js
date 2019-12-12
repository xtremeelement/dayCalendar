var time = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
var displayCalendar;
var calendar = $(".calendar");

for (var i = 0; i < time.length; i++) {
  displayCalendar = `
          <div class="input-group mb-3" data-value="${time[i]}">
              <h3>${time[i]}</h3>
              <input
                type="text"
                id="${time[i]}"
                class="form-control"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
              />
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="save" data-value="${time[i]}">
                  Save
                </button>
              </div>
            </div>
          `;
  calendar.append(displayCalendar);
}

$("button").on("click", function() {
  var button = $(this);
  var value = $(this).attr("data-value");
  console.log(button);
  console.log(value);
  var data = $(`#${value}`).val();
  console.log(data);
  localStorage.setItem(`${value}`, data);
});

for (var i = 0; i < time.length; i++) {
  item = localStorage.getItem(`${time[i]}`);
  if (item !== null) {
    $(`#${time[i]}`).val(`${item}`);
  }
}
