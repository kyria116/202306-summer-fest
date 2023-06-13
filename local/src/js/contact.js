var getUrlString = location.href;
var url = new URL(getUrlString);
lang = url.searchParams.get('lang');


$('.file-btn ').click(function (event) {
    var m_id = $(this).data("id");
    var $this = $("#" + m_id);
    var mpath = $this.find('.mpath b');
    $this.find("input").trigger('click');
    $this.find("input").change(function () {
        var filename = $(this).val().split('\\').pop();
        var reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        if (this.files[0].size > 20971520) {
            switch (lang) {
                case "tw":
                    alert("圖片上傳大小不可超過20M");
                    break;
                case "en":
                    alert("File upload size cannot exceed 20M");
                    break;
                case "jp":
                    alert("ファイルのアップロード サイズは 20M を超えることはできません");
                    break;
            }

        } else {
            reader.onload = function (e) {
                $(mpath).text(filename);
                $this.find('.delbtn').show();
                $this.find('.file-btn').addClass('disabled');
            }
        };
    });
});
$('.delbtn').on('click', function () {
    var m_id = $(this).data("id");
    $(this).hide();
    $("#" + m_id).find('.mpath b').html('');
    $("#" + m_id).find('input').val("");
    $("#" + m_id).find('.file-btn').removeClass('disabled');
})

const input = document.querySelectorAll('.checkbg');

input.forEach(function (value) {
    value.addEventListener('change', function (e) {
        if (e.target.value != "") {
            value.classList.add('active')
        } else {
            value.classList.remove('active')
        }
    });
})

$('footer .bgred').remove();