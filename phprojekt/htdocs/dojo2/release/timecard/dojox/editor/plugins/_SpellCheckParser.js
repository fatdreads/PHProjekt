//>>built
define("dojox/editor/plugins/_SpellCheckParser",["dojo","dojox","dojo/_base/connect","dojo/_base/declare"],function(c,f){c.declare("dojox.editor.plugins._SpellCheckParser",null,{lang:"english",parseIntoWords:function(b){function h(a){a=a.charCodeAt(0);return 48<=a&&57>=a||65<=a&&90>=a||97<=a&&122>=a}for(var c=this.words=[],f=this.indices=[],a=0,d=b&&b.length,g=0;a<d;){for(var e;a<d&&!h(e=b.charAt(a))&&"&"!=e;)a++;if("&"==e)for(;++a<d&&";"!=(e=b.charAt(a))&&h(e););else{for(g=a;++a<d&&h(b.charAt(a)););
g<d&&(c.push(b.substring(g,a)),f.push(g))}}return c},getIndices:function(){return this.indices}});c.subscribe(dijit._scopeName+".Editor.plugin.SpellCheck.getParser",null,function(b){if(!b.parser)b.parser=new f.editor.plugins._SpellCheckParser});return f.editor.plugins._SpellCheckParser});