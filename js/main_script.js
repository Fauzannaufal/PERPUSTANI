// $.fn.uploadVideo = function () {
// 	this.change(function() {
// 		if(this.files.length > 0){
// 			var url =  window.URL.createObjectURL(this.files[0]);
// 			$("#preview_vid").html(`
// 				<video src="`+url+`" controls="" autoplay=""></video>
// 				`
// 			);
// 			var new_vid = $("#preview_vid video");
// 			new_vid.onload = function () {
// 				window.URL.revokeObjectURL(url);
// 			};

// 			var name = this.files[0].name;
// 			var size = this.files[0].size;

// 			var ukuran = "";
// 			if (size >= 1000000 ) { //MB
// 				size = Math.ceil(size/1000000); 
// 				ukuran = size + "MB"; 
// 			} 
// 			else if (size >= 1000) { //KB
// 				size = Math.ceil(size/1000);
// 				ukuran = size + "KB";
// 			}
// 			else if(size < 1000){
// 				ukuran = size + "Byte";
// 			}
			
// 			$("#file_info").html(`
// 				<p>Nama File : `+name+`</p>
// 				<p>Ukuran File : `+ukuran+`</p>
// 				`
// 			);
// 		}
// 	});
// }

function modalShow() {
	$("#id_modal").show();
	$("#id_modal").css('animation-name', 'show_modal');
	// $(".modal-content:first").css('animation-name', 'show_modal');
}

function modalHide() {
	// $(".modal-content:first").css('animation-name', 'hide_modal');
	$("#id_modal").css('animation-name', 'hide_modal');
	setTimeout(function function_name() {
		$("#id_modal").hide();
	}, 300);
}

$.fn.updateBuku = function () {
	var form = this;
	var status = "";

	form.on("click", function(event) {
    	event.preventDefault();

    	var Judul_Buku = $("input[name='JB']").val();
    	var Sub_Judul = $("input[name='SJ']").val();
    	var Penulis = $("input[name='P']").val();

    	//RegEx
		var namaReg = /^[a-zA-Z' ]+$/; //alfabet(besar atau kecil), petik ('), dan spasi saja
		// var angka = /^\d+$/; //angka saja

    	if (Judul_Buku == "" || Sub_Judul == "" || Penulis == "") {
    		show_error("Harap lengkapi data profil");
    		status = false;
    	} 
    	else if (!namaReg.test(Judul_Buku)) {
    		show_error("Nama hanya boleh menggunakan huruf dan tanda petik (')");
    		status = false;
    	}
    	else if (!namaReg.test(Sub_Judul)) {
    		show_error("Nama hanya boleh menggunakan huruf dan tanda petik (')");
    		status = false;
    	}
    	else if (!namaReg.test(Penulis)) {
    		show_error("Nama hanya boleh menggunakan huruf dan tanda petik (')");
    		status = false;
    	}
    	else {
    		console.log(Judul_Buku);
    		$("h2#Jubuk").text(Judul_Buku);
    		$("h3#Suju").text(Sub_Judul);
    		$("h4#Pls").text(Penulis);
   		modalHide();
    	}
   });

   $("#btn_file").change(function(event) {
   	if (this.files && this.files[0]) {
   	  var reader = new FileReader();

   	  reader.onload = function(e) {
   	    // $('#avatar_user').show();
   	    $('#ubahgmbr').attr('src', e.target.result);
   	  }

   	  reader.readAsDataURL(this.files[0]);
   	}	
   });
}

$.fn.uploadGambar = function () { //extending jquery
	this.change(function(event) {
    	if(this.files.length > 0){
    		console.log(this.files[0]);
 			var name = this.files[0].name;
 			var size = this.files[0].size;

 			var ukuran = "";
 			if (size >= 1000000 ) { //MB
 				size = Math.ceil(size/1000000); 
 				ukuran = size + "MB"; 
 			} 
 			else if (size >= 1000) { //KB
 				size = Math.ceil(size/1000);
 				ukuran = size + "KB";
 			}
 			else if(size < 1000){
 				ukuran = size + "Byte";
 			}
 			
 			$("#file_info").html(`
 				<p>Nama File : `+name+`</p>
 				<p>Ukuran File : `+ukuran+`</p>
 				`
 			);
    		
    		if (this.files && this.files[0]) {
    		  var reader = new FileReader();

    		  reader.onload = function(e) {
    		    $('#contoh').show();
    		    $('#contoh').attr('src', e.target.result);
    		  }

    		  reader.readAsDataURL(this.files[0]);
    		}
    	}
	});
}