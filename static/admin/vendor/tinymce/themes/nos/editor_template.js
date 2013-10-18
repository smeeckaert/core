(function(h){var i=h.DOM,g=h.dom.Event,c=h.extend,f=h.each,a=h.util.Cookie,e,d=h.explode;function b(p,m){var k,l,o=p.dom,j="",n,r;previewStyles=p.settings.preview_styles;if(previewStyles===false){return""}if(!previewStyles){previewStyles="font-family font-size font-weight text-decoration text-transform color background-color"}function q(s){return s.replace(/%(\w+)/g,"")}k=m.block||m.inline||"span";l=o.create(k);f(m.styles,function(t,s){t=q(t);if(t){o.setStyle(l,s,t)}});f(m.attributes,function(t,s){t=q(t);if(t){o.setAttrib(l,s,t)}});f(m.classes,function(s){s=q(s);if(!o.hasClass(l,s)){o.addClass(l,s)}});o.setStyles(l,{position:"absolute",left:-65535});p.getBody().appendChild(l);n=o.getStyle(p.getBody(),"fontSize",true);n=/px$/.test(n)?parseInt(n,10):0;f(previewStyles.split(" "),function(s){var t=o.getStyle(l,s,true);if(s=="background-color"&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(t)){t=o.getStyle(p.getBody(),s,true);if(o.toHex(t).toLowerCase()=="#ffffff"){return}}if(s=="font-size"){if(/em|%$/.test(t)){if(n===0){return}t=parseFloat(t,10)/(/%$/.test(t)?100:1);t=(t*n)+"px"}}j+=s+":"+t+";"});o.remove(l);return j}h.ThemeManager.requireLangPack("nos");h.create("tinymce.themes.NosTheme",{sizes:[8,10,12,14,18,24,36],controls:{bold:["bold_desc","Bold"],italic:["italic_desc","Italic"],underline:["underline_desc","Underline"],strikethrough:["striketrough_desc","Strikethrough"],bullist:["bullist_desc","InsertUnorderedList"],numlist:["numlist_desc","InsertOrderedList"],outdent:["outdent_desc","Outdent"],indent:["indent_desc","Indent"],cut:["cut_desc","nosCut"],copy:["copy_desc","nosCopy"],paste:["paste_desc","nosPaste"],undo:["undo_desc","Undo"],redo:["redo_desc","Redo"],cleanup:["cleanup_desc","mceCleanup"],code:["code_desc","mceCodeEditor"],hr:["hr_desc","InsertHorizontalRule"],removeformat:["removeformat_desc","RemoveFormat"],sub:["sub_desc","subscript"],sup:["sup_desc","superscript"],forecolor:["forecolor_desc","ForeColor"],forecolorpicker:["forecolor_desc","mceForeColor"],backcolor:["backcolor_desc","HiliteColor"],backcolorpicker:["backcolor_desc","mceBackColor"],charmap:["charmap_desc","mceCharMap"],anchor:["anchor_desc","mceInsertAnchor"],newdocument:["newdocument_desc","mceNewDocument"],blockquote:["blockquote_desc","mceBlockQuote"]},stateControls:["bold","italic","underline","strikethrough","bullist","numlist","sub","sup","blockquote"],init:function(l,m){var n=this,p,k,q;n.editor=l;n.url=m;n.onResolveName=new h.util.Dispatcher(this);n.settings=p=c({theme_nos_path:true,theme_nos_toolbar_location:"external",theme_nos_blockformats:"p,address,pre,h1,h2,h3,h4,h5,h6",theme_nos_toolbar_align:"left",theme_nos_statusbar_location:"bottom",theme_nos_buttons1:"tablecontrols",theme_nos_buttons2:"underline,strikethrough,sub,sup,|,forecolor,backcolor,|,outdent,indent,blockquote,|,anchor,charmap,hr,nonbreaking,nosbrclearall,|,styleprops,removeformat",theme_nos_buttons3:"search,replace,|,spellchecker,|,newdocument,nosvisualhtml,code",theme_nos_buttons4:"nosimage,nosmedia,noslink,nosenhancer",theme_nos_buttons5:"nosstyleselect,bold,italic,nosalign,bullist,numlist,|,cut,copy,nospaste,undo,redo,|,nostoolbartoggle",theme_nos_fonts:"Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats",theme_nos_more_colors:1,theme_nos_row_height:23,theme_nos_resize_horizontal:1,theme_nos_resizing_use_cookie:1,theme_nos_font_sizes:"1,2,3,4,5,6,7",theme_nos_font_selector:"span",theme_nos_show_current_color:0,readonly:l.settings.readonly},l.settings);if(!p.font_size_style_values){p.font_size_style_values="8pt,10pt,12pt,14pt,18pt,24pt,36pt"}if(h.is(p.theme_nos_font_sizes,"string")){p.font_size_style_values=h.explode(p.font_size_style_values);p.font_size_classes=h.explode(p.font_size_classes||"");q={};l.settings.theme_nos_font_sizes=p.theme_nos_font_sizes;f(l.getParam("theme_nos_font_sizes","","hash"),function(s,r){var o;if(r==s&&s>=1&&s<=7){r=s+" ("+n.sizes[s-1]+"pt)";o=p.font_size_classes[s-1];s=p.font_size_style_values[s-1]||(n.sizes[s-1]+"pt")}if(/^\s*\./.test(s)){o=s.replace(/\./g,"")}q[r]=o?{"class":o}:{fontSize:s}});p.theme_nos_font_sizes=q}if((k=p.theme_nos_path_location)&&k!="none"){p.theme_nos_statusbar_location=p.theme_nos_path_location}if(p.theme_nos_statusbar_location=="none"){p.theme_nos_statusbar_location=0}if(l.settings.content_css!==false){l.contentCSS.push(l.baseURI.toAbsolute(m+"/skins/"+l.settings.skin+"/content.css"))}l.onInit.add(function(){if(!l.settings.readonly){l.onNodeChange.add(n._nodeChanged,n);l.onKeyUp.add(n._updateUndoStatus,n);l.onMouseUp.add(n._updateUndoStatus,n);l.dom.bind(l.dom.getRoot(),"dragend",function(){n._updateUndoStatus(l)})}});var j=this;l.addButton("nosmedia",{title:"nos.media_title",label:"nos.media_label","class":"mce_media",cmd:"mceMedia"});l.onSetProgressState.add(function(s,o,t){var u,v=s.id,r;if(o){n.progressTimer=setTimeout(function(){u=s.getContainer();u=u.insertBefore(i.create("DIV",{style:"position:relative"}),u.firstChild);r=i.get(s.id+"_tbl");i.add(u,"div",{id:v+"_blocker","class":"mceBlocker",style:{width:r.clientWidth+2,height:r.clientHeight+2}});i.add(u,"div",{id:v+"_progress","class":"mceProgress",style:{left:r.clientWidth/2,top:r.clientHeight/2}})},t||0)}else{i.remove(v+"_blocker");i.remove(v+"_progress");clearTimeout(n.progressTimer)}});i.loadCSS(p.editor_css?l.documentBaseURI.toAbsolute(p.editor_css):m+"/skins/"+l.settings.skin+"/ui.css");if(p.skin_variant){i.loadCSS(m+"/skins/"+l.settings.skin+"/ui_"+p.skin_variant+".css")}},createControl:function(m,j){var k,l;if(l=j.createControl(m)){return l}switch(m){case"styleselect":return this._createStyleSelect();case"formatselect":return this._createBlockFormats();case"fontselect":return this._createFontSelect();case"fontsizeselect":return this._createFontSizeSelect();case"forecolor":return this._createForeColorMenu();case"backcolor":return this._createBackColorMenu()}if((k=this.controls[m])){return j.createButton(m,{title:"nos."+k[0],cmd:k[1],ui:k[2],value:k[3],label:k[4]?"nos."+k[4]:""})}},execCommand:function(n,m,o){var l=this["_"+n],j=this.editor;switch(n){case"nosCut":case"nosCopy":case"nosPaste":j.windowManager.alert(j.getLang("nos.clipboard_msg"));try{j.getDoc().execCommand(n.replace("nos",""),m,o)}catch(k){if(this.isGecko){j.windowManager.alert(j.getLang("nos.clipboard_msg"))}else{j.windowManager.alert(j.getLang("clipboard_no_support"))}}return true;break;default:if(l){l.call(this,m,o);return true}}return false},_importClasses:function(l){var j=this.editor,k=j.controlManager.get("styleselect");if(k.getLength()==0){f(j.dom.getClasses(),function(q,m){var p="style_"+m,n;n={inline:"span",attributes:{"class":q["class"]},selector:"*"};j.formatter.register(p,n);k.add(q["class"],p,{style:function(){return b(j,n)}})})}},_createStyleSelect:function(o){var l=this,j=l.editor,k=j.controlManager,m;m=k.createListBox("styleselect",{title:"nos.style_select",onselect:function(q){var r,n=[],p;f(m.items,function(s){n.push(s.value)});j.focus();j.undoManager.add();r=j.formatter.matchAll(n);h.each(r,function(s){if(!q||s==q){if(s){j.formatter.remove(s)}p=true}});if(!p){j.formatter.apply(q)}j.undoManager.add();j.nodeChanged();return false}});j.onPreInit.add(function(){var p=0,n=j.getParam("style_formats");if(n){f(n,function(q){var r,s=0;f(q,function(){s++});if(s>1){r=q.name=q.name||"style_"+(p++);j.formatter.register(r,q);m.add(q.title,r,{style:function(){return b(j,q)}})}else{m.add(q.title)}})}else{f(j.getParam("theme_nos_styles","","hash"),function(t,s){var r,q;if(t){r="style_"+(p++);q={inline:"span",classes:t,selector:"*"};j.formatter.register(r,q);m.add(l.editor.translate(s),r,{style:function(){return b(j,q)}})}})}});if(m.getLength()==0){m.onPostRender.add(function(p,q){if(!m.NativeListBox){g.add(q.id+"_text","focus",l._importClasses,l);g.add(q.id+"_text","mousedown",l._importClasses,l);g.add(q.id+"_open","focus",l._importClasses,l);g.add(q.id+"_open","mousedown",l._importClasses,l)}else{g.add(q.id,"focus",l._importClasses,l)}})}return m},_createFontSelect:function(){var l,k=this,j=k.editor;l=j.controlManager.createListBox("fontselect",{title:"nos.fontdefault",onselect:function(m){var n=l.items[l.selectedIndex];if(!m&&n){j.execCommand("FontName",false,n.value);return}j.execCommand("FontName",false,m);l.select(function(o){return m==o});if(n&&n.value==m){l.select(null)}return false}});if(l){f(j.getParam("theme_nos_fonts",k.settings.theme_nos_fonts,"hash"),function(n,m){l.add(j.translate(m),n,{style:n.indexOf("dings")==-1?"font-family:"+n:""})})}return l},_createFontSizeSelect:function(){var m=this,k=m.editor,n,l=0,j=[];n=k.controlManager.createListBox("fontsizeselect",{title:"nos.font_size",onselect:function(o){var p=n.items[n.selectedIndex];if(!o&&p){p=p.value;if(p["class"]){k.formatter.toggle("fontsize_class",{value:p["class"]});k.undoManager.add();k.nodeChanged()}else{k.execCommand("FontSize",false,p.fontSize)}return}if(o["class"]){k.focus();k.undoManager.add();k.formatter.toggle("fontsize_class",{value:o["class"]});k.undoManager.add();k.nodeChanged()}else{k.execCommand("FontSize",false,o.fontSize)}n.select(function(q){return o==q});if(p&&(p.value.fontSize==o.fontSize||p.value["class"]&&p.value["class"]==o["class"])){n.select(null)}return false}});if(n){f(m.settings.theme_nos_font_sizes,function(p,o){var q=p.fontSize;if(q>=1&&q<=7){q=m.sizes[parseInt(q)-1]+"pt"}n.add(o,p,{style:"font-size:"+q,"class":"mceFontSize"+(l++)+(" "+(p["class"]||""))})})}return n},_createBlockFormats:function(){var n,j={p:"nos.paragraph",address:"nos.address",pre:"nos.pre",h1:"nos.h1",h2:"nos.h2",h3:"nos.h3",h4:"nos.h4",h5:"nos.h5",h6:"nos.h6",div:"nos.div",blockquote:"nos.blockquote",code:"nos.code",dt:"nos.dt",dd:"nos.dd",samp:"nos.samp"},l=this,k,m;n=l.editor.controlManager.createListBox("formatselect",{title:"nos.block",cmd:"FormatBlock"});if(n){fmts_site=l.editor.getParam("theme_nos_blockformats",l.settings.theme_nos_blockformats,"hash");f(fmts_site,function(p,o){n.add(l.editor.translate(o!=p?o:j[p]),p,{"class":"mce_formatPreview mce_"+p,style:function(){return b(l.editor,{block:p})}})})}return n},_createForeColorMenu:function(){var n,k=this,l=k.settings,m={},j;if(l.theme_nos_more_colors){m.more_colors_func=function(){k._mceColorPicker(0,{color:n.value,func:function(o){n.setColor(o)}})}}if(j=l.theme_nos_text_colors){m.colors=j}if(l.theme_nos_default_foreground_color){m.default_color=l.theme_nos_default_foreground_color}m.title="nos.forecolor_desc";m.cmd="ForeColor";m.scope=this;n=k.editor.controlManager.createColorSplitButton("forecolor",m);return n},_createBackColorMenu:function(){var n,k=this,l=k.settings,m={},j;if(l.theme_nos_more_colors){m.more_colors_func=function(){k._mceColorPicker(0,{color:n.value,func:function(o){n.setColor(o)}})}}if(j=l.theme_nos_background_colors){m.colors=j}if(l.theme_nos_default_background_color){m.default_color=l.theme_nos_default_background_color}m.title="nos.backcolor_desc";m.cmd="HiliteColor";m.scope=this;n=k.editor.controlManager.createColorSplitButton("backcolor",m);return n},renderUI:function(l){var q,m,r,w=this,u=w.editor,x=w.settings,v,k,j;if(u.settings){u.settings.aria_label=x.aria_label+u.getLang("nos.help_shortcut")}q=k=i.create("span",{role:"application","aria-labelledby":u.id+"_voice",id:u.id+"_parent","class":"mceEditor "+u.settings.skin+"Skin"+(x.skin_variant?" "+u.settings.skin+"Skin"+w._ufirst(x.skin_variant):"")+(u.settings.directionality=="rtl"?" mceRtl":"")});i.add(q,"span",{"class":"mceVoiceLabel",style:"display:none;",id:u.id+"_voice"},x.aria_label);if(!i.boxModel){q=i.add(q,"div",{"class":"mceOldBoxModel"})}q=v=i.add(q,"table",{role:"presentation",id:u.id+"_tbl","class":"mceLayout",cellSpacing:0,cellPadding:0});q=r=i.add(q,"tbody");switch((x.theme_nos_layout_manager||"").toLowerCase()){case"rowlayout":m=w._rowLayout(x,r,l);break;case"customlayout":m=u.execCallback("theme_nos_custom_layout",x,r,l,k);break;default:m=w._simpleLayout(x,r,l,k)}q=l.targetNode;j=v.rows;i.addClass(j[0],"mceFirst");i.addClass(j[j.length-1],"mceLast");f(i.select("tr",r),function(o){i.addClass(o.firstChild,"mceFirst");i.addClass(o.childNodes[o.childNodes.length-1],"mceLast")});if(i.get(x.theme_nos_toolbar_container)){i.get(x.theme_nos_toolbar_container).appendChild(k)}else{i.insertAfter(k,q)}g.add(u.id+"_path_row","click",function(n){n=n.target;if(n.nodeName=="A"){w._sel(n.className.replace(/^.*mcePath_([0-9]+).*$/,"$1"));return false}});if(!u.getParam("accessibility_focus")){g.add(i.add(k,"a",{href:"#"},"<!-- IE -->"),"focus",function(){tinyMCE.get(u.id).focus()})}if(x.theme_nos_toolbar_location=="external"){l.deltaHeight=0}w.deltaHeight=l.deltaHeight;l.targetNode=null;u.onKeyDown.add(function(p,n){var s=121,o=122;if(n.altKey){if(n.keyCode===s){if(h.isWebKit){window.focus()}w.toolbarGroup.focus();return g.cancel(n)}else{if(n.keyCode===o){i.get(p.id+"_path_row").focus();return g.cancel(n)}}}});u.addShortcut("alt+0","","mceShortcuts",w);return{iframeContainer:m,editorContainer:u.id+"_parent",sizeContainer:v,deltaHeight:l.deltaHeight}},getInfo:function(){return{longname:"Nos theme",author:"Novius-OS",authorurl:"http://www.novius-os.org",version:"0.1"}},resizeBy:function(j,k){var l=i.get(this.editor.id+"_ifr");this.resizeTo(l.clientWidth+j,l.clientHeight+k)},resizeTo:function(j,n,l){var k=this.editor,m=this.settings,o=i.get(k.id+"_tbl"),p=i.get(k.id+"_ifr");j=Math.max(m.theme_nos_resizing_min_width||100,j);n=Math.max(m.theme_nos_resizing_min_height||100,n);j=Math.min(m.theme_nos_resizing_max_width||65535,j);n=Math.min(m.theme_nos_resizing_max_height||65535,n);i.setStyle(o,"height","");i.setStyle(p,"height",n);if(m.theme_nos_resize_horizontal){i.setStyle(o,"width","");i.setStyle(p,"width",j);if(j<o.clientWidth){j=o.clientWidth;i.setStyle(p,"width",o.clientWidth)}}if(l&&m.theme_nos_resizing_use_cookie){a.setHash("TinyMCE_"+k.id+"_size",{cw:j,ch:n})}},destroy:function(){var j=this.editor.id;g.clear(j+"_resize");g.clear(j+"_path_row");g.clear(j+"_external_close")},_simpleLayout:function(z,u,l,j){var y=this,v=y.editor,w=z.theme_nos_toolbar_location,q=z.theme_nos_statusbar_location,m,k,r,x;if(z.readonly){m=i.add(u,"tr");m=k=i.add(m,"td",{"class":"mceIframeContainer"});return k}if(w=="top"){y._addToolbars(u,l)}if(w=="external"){m=x=i.create("div",{style:"position:relative"});m=i.add(m,"div",{id:v.id+"_external","class":"mceExternalToolbar",style:"z-index:999;"});i.add(m,"a",{id:v.id+"_external_close",href:"javascript:;","class":"mceExternalClose"});m=i.add(m,"table",{id:v.id+"_tblext",cellSpacing:0,cellPadding:0});r=i.add(m,"tbody");if(j.firstChild.className=="mceOldBoxModel"){j.firstChild.appendChild(x)}else{j.insertBefore(x,j.firstChild)}y._addToolbars(r,l);v.onMouseUp.add(function(){var p=i.get(v.id+"_external");i.show(p);i.hide(e);var o=g.add(v.id+"_external_close","click",function(){i.hide(v.id+"_external");g.remove(v.id+"_external_close","click",o);return false});i.show(p);var n=i.getRect(v.id+"_tblext");i.setStyle(p,"top",0-n.h-1);if(n.w+n.x>window.innerWidth){i.setStyle(p,"left",window.innerWidth-n.w-n.x-1)}i.hide(p);i.show(p);p.style.filter="";e=v.id+"_external";p=null})}if(q=="top"){y._addStatusBar(u,l)}if(!z.theme_nos_toolbar_container){m=i.add(u,"tr");m=k=i.add(m,"td",{"class":"mceIframeContainer"})}if(w=="bottom"){y._addToolbars(u,l)}if(q=="bottom"){y._addStatusBar(u,l)}return k},_rowLayout:function(x,p,l){var w=this,q=w.editor,v,y,j=q.controlManager,m,k,u,r;v=x.theme_nos_containers_default_class||"";y=x.theme_nos_containers_default_align||"center";f(d(x.theme_nos_containers||""),function(s,o){var n=x["theme_nos_container_"+s]||"";switch(s.toLowerCase()){case"mceeditor":m=i.add(p,"tr");m=k=i.add(m,"td",{"class":"mceIframeContainer"});break;case"mceelementpath":w._addStatusBar(p,l);break;default:r=(x["theme_nos_container_"+s+"_align"]||y).toLowerCase();r="mce"+w._ufirst(r);m=i.add(i.add(p,"tr"),"td",{"class":"mceToolbar "+(x["theme_nos_container_"+s+"_class"]||v)+" "+r||y});u=j.createToolbar("toolbar"+o);w._addControls(n,u);i.setHTML(m,u.renderHTML());l.deltaHeight-=x.theme_nos_row_height}});return k},_addControls:function(k,j){var l=this,m=l.settings,n,o=l.editor.controlManager;if(m.theme_nos_disable&&!l._disabled){n={};f(d(m.theme_nos_disable),function(p){n[p]=1});l._disabled=n}else{n=l._disabled}f(d(k),function(q){var p;if(n&&n[q]){return}if(q=="tablecontrols"){f(["table","|","row_props","cell_props","|","row_before","row_after","delete_row","|","col_before","col_after","delete_col","|","split_cells","merge_cells"],function(r){r=l.createControl(r,o);if(r){j.add(r)}});return}p=l.createControl(q,o);if(p){j.add(p)}})},_addToolbars:function(y,k){var B=this,q,p,u=B.editor,C=B.settings,A,j=u.controlManager,w,l,r=[],z,x,m=false;x=j.createToolbarGroup("toolbargroup",{name:u.getLang("nos.toolbar"),tab_focus_toolbar:u.getParam("theme_nos_tab_focus_toolbar")});B.toolbarGroup=x;z=C.theme_nos_toolbar_align.toLowerCase();z="mce"+B._ufirst(z);l=i.add(i.add(y,"tr",{role:"presentation"}),"td",{"class":"mceToolbar "+z,role:"presentation"});for(q=1;(A=C["theme_nos_buttons"+q]);q++){m=true;p=j.createToolbar("toolbar"+q,{"class":"mceToolbarRow"+q});if(C["theme_nos_buttons"+q+"_add"]){A+=","+C["theme_nos_buttons"+q+"_add"]}if(C["theme_nos_buttons"+q+"_add_before"]){A=C["theme_nos_buttons"+q+"_add_before"]+","+A}B._addControls(A,p);x.add(p);k.deltaHeight-=C.theme_nos_row_height}if(!m){k.deltaHeight-=C.theme_nos_row_height}r.push(x.renderHTML());r.push(i.createHTML("a",{href:"#",accesskey:"z",title:u.getLang("nos.toolbar_focus"),onfocus:"tinyMCE.getInstanceById('"+u.id+"').focus();"},"<!-- IE -->"));i.setHTML(l,r.join(""))},_addStatusBar:function(p,k){var l,w=this,q=w.editor,x=w.settings,j,u,v,m;l=i.add(p,"tr");l=m=i.add(l,"td",{"class":"mceStatusbar"});l=i.add(l,"div",{id:q.id+"_path_row",role:"group","aria-labelledby":q.id+"_path_voice"});if(x.theme_nos_path){i.add(l,"span",{id:q.id+"_path_voice"},q.translate("nos.path"));i.add(l,"span",{},": ")}else{i.add(l,"span",{},"&#160;")}if(x.theme_nos_resizing){i.add(m,"a",{id:q.id+"_resize",href:"javascript:;",onclick:"return false;","class":"mceResize",tabIndex:"-1"});if(x.theme_nos_resizing_use_cookie){q.onPostRender.add(function(){var n=a.getHash("TinyMCE_"+q.id+"_size"),r=i.get(q.id+"_tbl");if(!n){return}w.resizeTo(n.cw,n.ch)})}q.onPostRender.add(function(){g.add(q.id+"_resize","click",function(n){n.preventDefault()});g.add(q.id+"_resize","mousedown",function(E){var t,r,s,o,D,A,B,G,n,F,y;function z(H){H.preventDefault();n=B+(H.screenX-D);F=G+(H.screenY-A);w.resizeTo(n,F)}function C(H){g.remove(i.doc,"mousemove",t);g.remove(q.getDoc(),"mousemove",r);g.remove(i.doc,"mouseup",s);g.remove(q.getDoc(),"mouseup",o);n=B+(H.screenX-D);F=G+(H.screenY-A);w.resizeTo(n,F,true);q.nodeChanged()}E.preventDefault();D=E.screenX;A=E.screenY;y=i.get(w.editor.id+"_ifr");B=n=y.clientWidth;G=F=y.clientHeight;t=g.add(i.doc,"mousemove",z);r=g.add(q.getDoc(),"mousemove",z);s=g.add(i.doc,"mouseup",C);o=g.add(q.getDoc(),"mouseup",C)})})}k.deltaHeight-=21;l=p=null},_updateUndoStatus:function(k){var j=k.controlManager,l=k.undoManager;j.setDisabled("undo",!l.hasUndo()&&!l.typing);j.setDisabled("redo",!l.hasRedo())},_nodeChanged:function(o,u,E,r,F){var z=this,D,G=0,y,H,A=z.settings,x,l,w,C,m,k,j;h.each(z.stateControls,function(n){u.setActive(n,o.queryCommandState(z.controls[n][1]))});function q(p){var s,n=F.parents,t=p;if(typeof(p)=="string"){t=function(v){return v.nodeName==p}}for(s=0;s<n.length;s++){if(t(n[s])){return n[s]}}}z._updateUndoStatus(o);u.setDisabled("outdent",!o.queryCommandState("Outdent"));D=q("A");if(H=u.get("anchor")){H.setActive(!r&&!!D&&(D.name||(D.id&&!D.href)))}D=q("IMG");if(H=u.get("image")){H.setActive(!r&&!!D&&E.className.indexOf("mceItem")==-1)}if(H=u.get("styleselect")){if(!H.isMenuRendered){H.renderMenu();H.isMenuRendered=true}k=[];f(H.items,function(n){k.push(n.value)});j=o.formatter.matchAll(k);H.select(j[0]);h.each(j,function(p,n){if(n>0){H.mark(p)}})}if(H=u.get("formatselect")){D=q(o.dom.isBlock);if(D){H.select(D.nodeName.toLowerCase())}}q(function(p){if(p.nodeName==="SPAN"){if(!x&&p.className){x=p.className}}if(o.dom.is(p,A.theme_nos_font_selector)){if(!l&&p.style.fontSize){l=p.style.fontSize}if(!w&&p.style.fontFamily){w=p.style.fontFamily.replace(/[\"\']+/g,"").replace(/^([^,]+).*/,"$1").toLowerCase()}if(!C&&p.style.color){C=p.style.color}if(!m&&p.style.backgroundColor){m=p.style.backgroundColor}}return false});if(H=u.get("fontselect")){H.select(function(n){return n.replace(/^([^,]+).*/,"$1").toLowerCase()==w})}if(H=u.get("fontsizeselect")){if(A.theme_nos_runtime_fontsize&&!l&&!x){l=o.dom.getStyle(E,"fontSize",true)}H.select(function(n){if(n.fontSize&&n.fontSize===l){return true}if(n["class"]&&n["class"]===x){return true}})}if(A.theme_nos_show_current_color){function B(p,n){if(H=u.get(p)){if(!n){n=H.settings.default_color}if(n!==H.value){H.displayColor(n)}}}B("forecolor",C);B("backcolor",m)}if(A.theme_nos_show_current_color){function B(p,n){if(H=u.get(p)){if(!n){n=H.settings.default_color}if(n!==H.value){H.displayColor(n)}}}B("forecolor",C);B("backcolor",m)}if(A.theme_nos_path&&A.theme_nos_statusbar_location){D=i.get(o.id+"_path")||i.add(o.id+"_path_row","span",{id:o.id+"_path"});if(z.statusKeyboardNavigation){z.statusKeyboardNavigation.destroy();z.statusKeyboardNavigation=null}i.setHTML(D,"");q(function(I){var p=I.nodeName.toLowerCase(),s,v,t="";if(I.nodeType!=1||p==="br"||I.getAttribute("data-mce-bogus")||i.hasClass(I,"mceItemHidden")||i.hasClass(I,"mceItemRemoved")){return}if(h.isIE&&I.scopeName!=="HTML"&&I.scopeName){p=I.scopeName+":"+p}p=p.replace(/mce\:/g,"");switch(p){case"b":p="strong";break;case"i":p="em";break;case"img":if(y=i.getAttrib(I,"src")){t+="src: "+y+" "}break;case"a":if(y=i.getAttrib(I,"name")){t+="name: "+y+" ";p+="#"+y}if(y=i.getAttrib(I,"href")){t+="href: "+y+" "}break;case"font":if(y=i.getAttrib(I,"face")){t+="font: "+y+" "}if(y=i.getAttrib(I,"size")){t+="size: "+y+" "}if(y=i.getAttrib(I,"color")){t+="color: "+y+" "}break;case"span":if(y=i.getAttrib(I,"style")){t+="style: "+y+" "}break}if(y=i.getAttrib(I,"id")){t+="id: "+y+" "}if(y=I.className){y=y.replace(/\b\s*(webkit|mce|Apple-)\w+\s*\b/g,"");if(y){t+="class: "+y+" ";if(o.dom.isBlock(I)||p=="img"||p=="span"){p+="."+y}}}p=p.replace(/(html:)/g,"");p={name:p,node:I,title:t};z.onResolveName.dispatch(z,p);t=p.title;p=p.name;v=i.create("a",{href:"javascript:;",role:"button",onmousedown:"return false;",title:t,"class":"mcePath_"+(G++)},p);if(D.hasChildNodes()){D.insertBefore(i.create("span",{"aria-hidden":"true"},"\u00a0\u00bb "),D.firstChild);D.insertBefore(v,D.firstChild)}else{D.appendChild(v)}},o.getBody());if(i.select("a",D).length>0){z.statusKeyboardNavigation=new h.ui.KeyboardNavigation({root:o.id+"_path_row",items:i.select("a",D),excludeFromTabOrder:true,onCancel:function(){o.focus()}},i)}}},_sel:function(j){this.editor.execCommand("mceSelectNodeDepth",false,j)},_mceInsertAnchor:function(l,k){var j=this.editor;j.windowManager.open({url:this.url+"/anchor.htm",width:320+parseInt(j.getLang("nos.anchor_delta_width",0)),height:90+parseInt(j.getLang("nos.anchor_delta_height",0)),inline:true},{theme_url:this.url})},_mceCharMap:function(){var j=this.editor;j.windowManager.open({url:this.url+"/charmap.htm",width:550+parseInt(j.getLang("nos.charmap_delta_width",0)),height:250+parseInt(j.getLang("nos.charmap_delta_height",0)),inline:true},{theme_url:this.url})},_mceColorPicker:function(l,k){var j=this.editor;k=k||{};j.windowManager.open({url:this.url+"/color_picker.htm",width:375+parseInt(j.getLang("nos.colorpicker_delta_width",0)),height:250+parseInt(j.getLang("nos.colorpicker_delta_height",0)),close_previous:false,inline:true},{input_color:k.color,func:k.func,theme_url:this.url})},_mceCodeEditor:function(k,l){var j=this.editor;j.windowManager.open({url:this.url+"/source_editor.htm",width:parseInt(j.getParam("theme_nos_source_editor_width",720)),height:parseInt(j.getParam("theme_nos_source_editor_height",580)),inline:true,resizable:true,maximizable:true},{theme_url:this.url})},_mceNewDocument:function(){var j=this.editor;j.windowManager.confirm("nos.newdocument",function(k){if(k){j.execCommand("mceSetContent",false,"")}})},_mceForeColor:function(){var j=this;this._mceColorPicker(0,{color:j.fgColor,func:function(k){j.fgColor=k;j.editor.execCommand("ForeColor",false,k)}})},_mceBackColor:function(){var j=this;this._mceColorPicker(0,{color:j.bgColor,func:function(k){j.bgColor=k;j.editor.execCommand("HiliteColor",false,k)}})},_ufirst:function(j){return j.substring(0,1).toUpperCase()+j.substring(1)}});h.ThemeManager.add("nos",h.themes.NosTheme)}(tinymce));