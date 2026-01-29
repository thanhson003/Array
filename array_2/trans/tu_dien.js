let english = ["hello", "apple", "banana", "computer", "book"];
let vietnamese = ["xin chào", "quả táo", "quả chuối", "máy tính", "quyển sách"];

function trans() {
    let search = document.getElementById("Search").value.trim().toLowerCase();
    let result = document.getElementById("result");
    let index = english.indexOf(search);
    if (index !== -1) {
        let meaning = vietnamese[index];
        result.innerHTML = "Nghĩa của từ: " + meaning;
    } else {
        result.innerHTML = "Không tìm thấy từ này trong từ điển.";
    }
}
