const btnLuas = document.getElementById('button-luas');
btnLuas.addEventListener("click", hitungLuas);

const btnResetLuas = document.getElementById('reset-luas');
btnResetLuas.addEventListener("click", resetLuas);

const btnKeliling = document.getElementById('button-keliling');
btnKeliling.addEventListener("click", hitungKeliling);

const btnResetKeliling = document.getElementById('reset-keliling');
btnResetKeliling.addEventListener("click", resetKeliling);

function hitungLuas() {
  const valueSisiLuas = document.getElementById('sisi-luas').value;

  parseInt(valueSisiLuas) === 0 && alert('nilai sisi tidak boleh 0')
  parseInt(valueSisiLuas) < 0 && alert('nilai sisi tidak boleh kurang dari 1')
  if (parseInt(valueSisiLuas) > 0) {
    let result = valueSisiLuas * valueSisiLuas

    const outputLuas = document.getElementById('output-luas');
    outputLuas.textContent = `L = ${valueSisiLuas} x ${valueSisiLuas} = ${result}`;
  }
}

function resetLuas() {
  const valueSisiLuas = document.getElementById('sisi-luas');
  const outputLuas = document.getElementById('output-luas');
  valueSisiLuas.value = "";
  outputLuas.textContent = "";
}


function hitungKeliling() {
  const valueSisiKeliling = document.getElementById('sisi-keliling').value;

  parseInt(valueSisiKeliling) === 0 && alert('nilai sisi tidak boleh 0')
  parseInt(valueSisiKeliling) < 0 && alert('nilai sisi tidak boleh kurang dari 1')
  if (parseInt(valueSisiKeliling) > 0) {
    let result = 4 * valueSisiKeliling

    const outputKeliling = document.getElementById('output-keliling');

    outputKeliling.textContent = `K = 4 x ${valueSisiKeliling} = ${result}`;
  }
}

function resetKeliling() {
  const valueSisiKeliling = document.getElementById('sisi-keliling');
  const outputKeliling = document.getElementById('output-keliling');
  valueSisiKeliling.value = "";
  outputKeliling.textContent = "";
}

