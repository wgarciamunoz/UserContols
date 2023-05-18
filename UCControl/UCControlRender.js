function UCControl($)
{

	this.SetDropDownData = function(data)
	{
		this.DropDownData = data;
	}

	this.GetDropDownData = function()
	{
		return this.DropDownData;
	}

	this.SetAtributo = function(data)
	{
		this.Atributo = data;
	}

	this.GetAtributo = function()
	{
		return this.Atributo;
	}

	this.show = function()
	{
		console.log(this.DropDownData.id);
		var html = '<span>';
		html    +=  this.Propiedad;
		html    += '</span>';
		html    += '<H1>' + this.Size + '</H1>';
		html 		+= '<div id="div1" style="width:200px; height:200px; border: solid 1px black; background-color: gray;"></div>';

		this.setHtml(html);

		var myThis = this;

		$('#div1').click(function(){
			myThis.Atributo = 'retorno do UC'
			myThis.Click();
		});


		console.log('myThis ' + myThis);
	}


}
