
// This file is an automatically generated and should not be edited

'use strict';

const options = [{"name":"data","type":"Data","description":{"ui":"Data\n","R":"Data\n"}},{"name":"method1","title":"Method 1","type":"Variable","suggested":["continuous"],"permitted":["numeric"],"description":{"ui":"1st method of measurement\n","R":"Name of column containing 1st Vector of data\n"}},{"name":"method2","title":"Method 2","type":"Variable","suggested":["continuous"],"permitted":["numeric"],"description":{"ui":"2nd method of measurement\n","R":"Name of column containing Vector of data\n"}},{"name":"ciWidth","title":"Confidence Level","type":"Number","min":0.5,"max":0.999,"default":0.95,"description":{"ui":"the confidence interval width.\n","R":"a number between .50 and .999 (default: .95), the width of confidence intervals\n"}},{"name":"agreeWidth","title":"Agreement Level","type":"Number","min":0.5,"max":0.999,"default":0.95,"description":{"ui":"The agreement level\n","R":"a number between .50 and .999 (default: .95), the width of agreement limits\n"}},{"name":"testValue","title":"Agreement Bound (+/-)","type":"Number","default":2,"description":{"ui":"Value that would define adequate absolute agreement.","R":"a number specifying the limit of agreement"}},{"name":"CCC","title":"Concordance Correlation Coefficient (CCC)","type":"Bool","default":true,"description":{"R":"`TRUE` or `FALSE` (default), produce CCC table\n"}},{"name":"plotbland","title":"Bland-Altman Plot","type":"Bool","default":false,"description":{"R":"`TRUE` or `FALSE` (default), for Bland-Altman plot\n"}},{"name":"plotcon","title":"Line-of-Identity Plot","type":"Bool","default":false,"description":{"R":"`TRUE` or `FALSE` (default), for Bland-Altman plot\n"}}];

const view = function() {
    
    this.handlers = { }

    View.extend({
        jus: "3.0",

        events: [

	]

    }).call(this);
}

view.layout = ui.extend({

    label: "Simple Agreement Analysis in jamovi",
    jus: "3.0",
    type: "root",
    stage: 0, //0 - release, 1 - development, 2 - proposed
    controls: [
		{
			type: DefaultControls.VariableSupplier,
			typeName: 'VariableSupplier',
			persistentItems: false,
			stretchFactor: 1,
			controls: [
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Method 1",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "method1",
							maxItemCount: 1,
							isTarget: true
						}
					]
				},
				{
					type: DefaultControls.TargetLayoutBox,
					typeName: 'TargetLayoutBox',
					label: "Method 2",
					controls: [
						{
							type: DefaultControls.VariablesListBox,
							typeName: 'VariablesListBox',
							name: "method2",
							maxItemCount: 1,
							isTarget: true
						}
					]
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.TextBox,
					typeName: 'TextBox',
					name: "ciWidth",
					format: FormatDef.number
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.TextBox,
					typeName: 'TextBox',
					name: "agreeWidth",
					format: FormatDef.number
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.TextBox,
					typeName: 'TextBox',
					name: "testValue",
					format: FormatDef.number
				}
			]
		},
		{
			type: DefaultControls.LayoutBox,
			typeName: 'LayoutBox',
			margin: "large",
			controls: [
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "CCC"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "plotbland"
				},
				{
					type: DefaultControls.CheckBox,
					typeName: 'CheckBox',
					name: "plotcon"
				}
			]
		}
	]
});

module.exports = { view : view, options: options };
