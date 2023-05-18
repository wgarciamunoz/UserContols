function Eventos($)
{
	this.show = function()
	{
		var html='';
		html = '<div id="div1" style="width:200px; height:200px;border: solid 1px black; background-color: gray;"></div>';

		this.setHtml(html);

		var meuThis = this;
		$('#div1').click(function(){
			meuThis.retorno = 'retorno do UC'
			meuThis.Click();
		});

	}


}
