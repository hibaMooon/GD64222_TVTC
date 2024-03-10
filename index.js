const btnTotal = document.querySelector(".total");

btnTotal.addEventListener("click", (e) => {
  e.preventDefault();
  const textError = document.querySelector(".error");
  const textResult = document.querySelector(".result");
  const startTimeInput = document.querySelector("#startTime");
  const totalHour = document.querySelector("#totalHour");
  const selectionDate = document.querySelector("#selectionDate");
  const hourEqual =
    selectionDate.value === "before"
      ? 50
      : selectionDate.value === "after"
      ? 35
      : "";
  const timeInSecond =
    startTimeInput.value.split(":")[0] * 3600 +
    startTimeInput.value.split(":")[1] * 60;
  let timeAfterAddWorkTime = timeInSecond + totalHour.value * hourEqual * 60;
  const date = new Date();
  date.setHours(
    startTimeInput.value.split(":")[0],
    startTimeInput.value.split(":")[1]
  );
  const hours = Math.floor(timeAfterAddWorkTime / 3600);
  const minutes = Math.floor((timeAfterAddWorkTime % 3600) / 60);

  if (!startTimeInput.value) {
    textError.classList.contains("hidden") &&
      textError.classList.remove("hidden");
    !textResult.classList.contains("hidden") &&
      textResult.classList.add("hidden");
    textError.textContent = "يجب أدخال توقيت دوامك";
    return;
  } else if (!totalHour.value) {
    !textResult.classList.contains("hidden") &&
      textResult.classList.add("hidden");
    textError.classList.contains("hidden") && textError.classList.remove("hidden");
    textError.textContent = "يجب ادخال عدد ساعات المحاضرة";
    return;
  } else if (hourEqual === "") {
    !textResult.classList.contains("hidden") &&
      textResult.classList.add("hidden");
    textError.classList.contains("hidden") && textError.classList.remove("hidden");
    textError.textContent = "يجب اختيار التوقيت";
    return;
  } else {
    !textError.classList.contains("hidden") &&
      textError.classList.add("hidden");
    textResult.classList.contains("hidden") &&
      textResult.classList.remove("hidden");
    textResult.textContent = `تنتهي المحاضرة في ${hours}:${minutes}`;
  }
});
