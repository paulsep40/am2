function hideInicio(){
		document.getElementById("sobrepor").style.marginLeft="100vw";
		document.getElementById("menuSobre").style.marginLeft="-1.5vw";
		document.getElementById("sociais").style.marginLeft="-10vw";
	}
	
	function showInicio(){
		document.getElementById("sobrepor").style.marginLeft="48vw";
		document.getElementById("menuSobre").style.marginLeft="100vw";
		document.getElementById("sociais").style.marginLeft="0vw";
	}
	
	
	function showPortPS(){
		document.getElementById("portfolio").style.marginLeft="-1vw";
		document.getElementById("portfolio").style.visibility="visible";
		document.getElementById("portfolio").style.opacity="1";
		document.getElementById("menuport").style.opacity="1";
		document.getElementById("circulo1ps").style.opacity="1";
		document.getElementById("circulo2ps").style.opacity="1";
		document.getElementById("imagensps").style.visibility="visible";
		document.getElementById("imagensps").style.opacity="1";
		document.getElementById("logoport").style.opacity="1";
		
	}
	
	function showPortIL(){
		document.getElementById("portfolio").style.marginLeft="-1vw";
		document.getElementById("portfolio").style.visibility="visible";
		document.getElementById("portfolio").style.opacity="1";
		document.getElementById("menuport").style.opacity="1";
		document.getElementById("circulo1ps").style.opacity="1";
		document.getElementById("circulo2ps").style.opacity="1";
		document.getElementById("imagensil").style.visibility="visible";
		document.getElementById("imagensil").style.opacity="1";
		document.getElementById("logoport").style.opacity="1";
		
	}
	
	function hidePort(){
		document.getElementById("portfolio").style.visibility="hidden";
		document.getElementById("portfolio").style.marginLeft="48vw";
		document.getElementById("portfolio").style.opacity="1";
		document.getElementById("menuport").style.opacity="0";
		document.getElementById("circulo1ps").style.opacity="0";
		document.getElementById("circulo2ps").style.opacity="0";
		document.getElementById("imagensps").style.visibility="hidden";
		document.getElementById("imagensps").style.opacity="0";
		document.getElementById("imagensil").style.visibility="hidden";
		document.getElementById("imagensil").style.opacity="0";
		document.getElementById("logoport").style.opacity="0";
		
	}
	
	
	
	
	
	
	function showCaminhada(){
		document.getElementById("lightbox").style.visibility="visible";
		document.getElementById("lightbox").style.opacity="1";
		document.getElementById("caminhadalight").style.opacity="1";
	}
	
	function hideLightbox(){
		document.getElementById("lightbox").style.opacity="0";
		document.getElementById("caminhadalight").style.opacity="0";
		document.getElementById("flashlight").style.opacity="0";
		document.getElementById("fairylight").style.opacity="0";
		document.getElementById("dwarflight").style.opacity="0";
		document.getElementById("hillslight").style.opacity="0";
		document.getElementById("billslight").style.opacity="0";
		document.getElementById("cartazlight").style.opacity="0";
		document.getElementById("edificiolight").style.opacity="0";
		document.getElementById("lightbox").style.visibility="hidden";
		
		
		
	}
	
	
	function showDwarf(){
		document.getElementById("lightbox").style.visibility="visible";
		document.getElementById("lightbox").style.opacity="1";
		document.getElementById("dwarflight").style.opacity="1";
	}
	
	function showFairy(){
		document.getElementById("lightbox").style.visibility="visible";
		document.getElementById("lightbox").style.opacity="1";
		document.getElementById("fairylight").style.opacity="1";
	}
	
	function showFlash(){
		document.getElementById("lightbox").style.visibility="visible";
		document.getElementById("lightbox").style.opacity="1";
		document.getElementById("flashlight").style.opacity="1";
	}
	
	
	function showhills(){
		document.getElementById("lightbox").style.visibility="visible";
		document.getElementById("lightbox").style.opacity="1";
		document.getElementById("hillslight").style.opacity="1";
	}
	
	function showbills(){
		document.getElementById("lightbox").style.visibility="visible";
		document.getElementById("lightbox").style.opacity="1";
		document.getElementById("billslight").style.opacity="1";
	}
	
	function showcartaz(){
		document.getElementById("lightbox").style.visibility="visible";
		document.getElementById("lightbox").style.opacity="1";
		document.getElementById("cartazlight").style.opacity="1";
	}
	
	function showedificio(){
		document.getElementById("lightbox").style.visibility="visible";
		document.getElementById("lightbox").style.opacity="1";
		document.getElementById("edificiolight").style.opacity="1";
	}
	
	function showContato(){
		hidePort();
		showInicio();
		document.getElementById("contatoPage").style.left="48vw";
	}
	
	function hideContato(){
		
		document.getElementById("contatoPage").style.left="101vw";
		
	}
	
	function checarform(){
		var inputnome=document.getElementById("nome").value;
		var inputassunto=document.getElementById("assunto").value;
		var inputemail=document.getElementById("email").value;
		
		if((inputnome=="")||(inputassunto=="")||(inputemail=="")){
			document.getElementById("sucesso").style.visibility="hidden";
			document.getElementById("falha").style.visibility="visible";
		
			if(inputnome==""){
				document.getElementById("nome").style.borderColor="red";
			}

			if(inputassunto==""){
				document.getElementById("assunto").style.borderColor="red";
			}

			if(inputemail==""){
				document.getElementById("email").style.borderColor="red";
			}
		}
		
		else{
			document.getElementById("nome").style.borderColor="white";
			document.getElementById("nome").value="";
			
			document.getElementById("assunto").style.borderColor="white";
			document.getElementById("assunto").value="";
			
			document.getElementById("email").style.borderColor="white";
			document.getElementById("email").value="";
			
			document.getElementById("mensagem").value="";
			
			document.getElementById("sucesso").style.visibility="visible";
			document.getElementById("falha").style.visibility="hidden";
		}
	}