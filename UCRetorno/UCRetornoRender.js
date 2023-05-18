function UCRetorno($)
{

	this.GetAtributo = function()
	{
		return this.Atributo;
	}

	this.SetAtributo = function (data) {
		this.Atributo = data;
	}

	this.GetButtonClicked = function()
	{
		return this.ButtonClicked;
	}

	this.SetButtonClicked = function (data) {
		this.ButtonClicked = data;
	}

	this.show = function()
	{
		var html = '';
		html += '<div class="form-group">';
		html += '<input id="ct1" type="text" class="form-control" placeholder="Digite algo" value="' + this.Atributo.Id + '">';
		html += '<input id="ct2" type="text" class="form-control" placeholder="Digite algo" value="' + this.Atributo.Nombre + '">';
		html += '<input id="ct3" type="text" class="form-control" placeholder="Digite algo" value="' + this.Atributo.Direccion + '">';
		html += '<input id="ct4" type="text" class="form-control" placeholder="Digite algo" value="' + this.Atributo.telefono + '">';
		html += '<button id="bt1" type="button" class="btn btn-default">Confirmar</button>';
		html += '</div>';

		this.setHtml(html);


				var myThis = this;

				$('#bt1').click(function(){
					myThis.retorno = $('#ct1').val();

					myThis.Atributo.Id = $('#ct1').val();
					myThis.Atributo.Nombre = $('#ct2').val();
					myThis.Atributo.Direccion = $('#ct3').val();
					myThis.Atributo.telefono = $('#ct4').val();
					myThis.ButtonClicked = $('#ct1').val();
					myThis.Click();
				});

				$('#ct1').blur(function () {
					myThis.retorno = $('#ct1').val();
					myThis.Blur();
				});

		var meuThis = this;
		$(document).ready(function () {
			$(window).bind("beforeunload", function () {
				meuThis.retorno = $('#ct1').val();
				meuThis.Close();
				return confirm("Você realmente deseja fechar a janela?");
			});
		});


	}


}
