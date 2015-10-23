
var onRun = function(context) {
    var FRAMEWORK_NAME = "ColorPickerPlus";

	try {
		HKColorPickerPlus.pickBorderColor();        
	} catch(e) {
        print(e);
		var pluginBundle = NSBundle.bundleWithURL(context.plugin.url()),
        	mocha = Mocha.sharedRuntime();
        if(mocha.loadFrameworkWithName_inDirectory(FRAMEWORK_NAME, pluginBundle.resourceURL().path())) {
			HKColorPickerPlus.pickBorderColor();            
        } else {        	
            print("Error while loading framework '"+FRAMEWORK_NAME+"`");
        }
	}
}