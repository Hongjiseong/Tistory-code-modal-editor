// 폴더 추가
$(document).on('click', '.js-add-folder', function(){
  function folder(name){
    name = name || '폴더이름';
    let folder = '';
    folder += '<li>';
    folder += '  <a href="#">';
    folder += '    <i class="far fa-folder"></i>';
    folder += '    <span class="editable">'+name+'</span>';
    folder += '    <span class="js-remove-folder"><i class="far fa-trash-alt"></i></span>';
    folder += '    <span class="js-add-file"><i class="far fa-file-alt">+</i></span>';
    folder += '    <span class="js-add-folder"><i class="fas fa-folder">+</i></span>';
    folder += '  </a>';
    folder += '  <ul></ul>';
    folder += '</li>';
    return folder;
  }

  let fileList = $(this).parent().next();
  fileList.append(folder());
});

// 파일 추가
$(document).on('click', '.js-add-file', function(){
  function file(name){
    name = name || '파일이름';
    let file = '';
    file += '<li>';
    file += '  <a href="#">';
    file += '    <i class="far fa-file-alt"></i>';
    file += '    <span class="editable" code="'+name+'">'+name+'</span>';
    file += '    <span class="js-remove-file"><i class="far fa-trash-alt"></i></span>';
    file += '  </a>';
    file += '</li>';
    return file;
  }

  let fileList = $(this).parent().next();
  fileList.append(file());
});

// 폴더, 파일 제거
$(document).on('click', '.js-remove-file', function(){
  const code = $(this).prev().attr("code");
  console.log(code);
  console.log($('pre[id="'+code+'"]').remove());
  $(this).parent().parent().remove();
});
$(document).on('click', '.js-remove-folder', function(){
  $(this).parent().parent().remove();
});

// 파일 및 폴더명 수정
$(document).on('dblclick', '.editable', function(e){
  $(this).attr('contenteditable', 'true');
  $(this).focus();
});

$(document).on('click', '.fa-file-alt + .editable', function(e){
  function code(fileCode){
    let code = '';
    code += '<pre id="'+fileCode+'" class="" contenteditable="true">';
    code += '</pre>';
    return code;
  }

  let codeList = $('#code');
  const id = $(this).attr('code');
  if($('pre[id="'+id+'"]').length === 0){
    codeList.append(code(id));
  }
  $('pre').removeClass('on');
  $('pre[id="'+id+'"]').addClass('on');
  $('.file-name').html(id);
});

// 수정완료시 엔터키 입력
$(document).on('keydown', '.editable', function(e){
  const beforeCode = $(this).attr('code');
  if(e.keyCode===13){
    const id = $(this).html();
    $(this).attr('code', id);
    $('#code').children('pre[id="'+beforeCode+'"]').attr('id', id);

    $(this).attr('contenteditable', 'false');
    return false;
  }
});

// 에디터 고정
$(document).on('click', '.js-fix', function(){
  $('pre.on').attr('contenteditable', 'false');
});

// .code-post .comment
$(document).on('click', '.js-fix', function(){
  $('pre.on').attr('contenteditable', 'false');
});

$(function(){
  
})