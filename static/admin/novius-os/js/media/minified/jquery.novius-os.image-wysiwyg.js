/**
 * NOVIUS OS - Web OS for digital communication
 *
 * @copyright  2011 Novius
 * @license    GNU Affero General Public License v3 or (at your option) any later version
 *             http://www.gnu.org/licenses/agpl-3.0.html
 * @link http://www.novius-os.org
 */
define("jquery-nos-image-wysiwyg",["jquery-nos","wijmo.wijtabs"],function(a){a.fn.extend({nosImageWysiwyg:function(b){b=b||{newImg:true,appdeskView:"",base_url:"",texts:{imageFirst:"Please choose an image first"}};return this.each(function(){var s=a(this).find("> form").submit(function(u){s.find("button[data-id=save]").triggerHandler("click");u.stopPropagation();u.preventDefault()}).end().find("a[data-id=close]").click(function(u){u.preventDefault();s.nosDialog("close")}).end().find("button[data-id=save]").click(function(v){var u=a("<img />");if(!i||!i.id){a.nosNotify(b.texts.imageFirst,"error");return}u.attr("height",o.val());u.attr("width",g.val());u.attr("title",r.val());u.attr("alt",f.val());u.attr("style",d.val());u.attr("data-media",JSON.stringify(i));u.attr("src",i.path);l.trigger("insert.media",u);v.stopPropagation();v.preventDefault()}).end().find("> ul").css({width:"18%"}).end(),l=s.closest(".ui-dialog-content").bind("select_media",function(v,u){m(u)}),n=s.find("div:eq(0)").css({width:"100%",padding:0,margin:0}),t=s.find("img").hide().parent().css("vertical-align","top").end(),o=s.find("input[data-id=height]"),g=s.find("input[data-id=width]").bind("change keyup",function(){if(h.is(":checked")&&i&&i.width&&i.height){var e=g.val();o.val(e==""?"":Math.round(e*i.height/i.width))}}),r=s.find("input[data-id=title]").bind("change keyup",function(){if(j.is(":checked")){f.val(r.val())}}),f=s.find("input[data-id=alt]"),d=s.find("input[data-id=style]"),h=s.find("input[data-id=proportional]").change(function(){if(h.is(":checked")){o.attr("readonly",true).addClass("ui-state-disabled").removeClass("ui-state-default");g.triggerHandler("change")}else{o.removeAttr("readonly").addClass("ui-state-default").removeClass("ui-state-disabled")}}),j=s.find("input[data-id=same_title_alt]").change(function(){if(j.is(":checked")){f.attr("readonly",true).addClass("ui-state-disabled").removeClass("ui-state-default")}else{f.removeAttr("readonly").addClass("ui-state-default").removeClass("ui-state-disabled")}r.triggerHandler("change")}),i=null,m=function(u,e){i=u;if(i&&i.thumbnail){t.attr("src",i.thumbnail.replace(/64/g,"128")).show()}if(e==null){o.val(u.height);g.val(u.width);r.val(u.title);f.val(u.title);d.val("");s.wijtabs("enableTab",1).wijtabs("select",1);return}o.val(e.attr("height"));g.val(e.attr("width"));r.val(e.attr("title"));f.val(e.attr("alt"));d.val(e.attr("style"));if(i&&(Math.round(g.val()*i.height/i.width)!=o.val())){h.prop("checked",false).change()}if(r.val()!=f.val()){j.prop("checked",false).change()}},p=l.data("tinymce"),q=p.selection.getNode();if(q.nodeName=="IMG"){var c=a(q),k=c.data("media-id");if(k){a.ajax({method:"GET",url:b.base_url+"admin/noviusos_media/appdesk/info/"+k,dataType:"json",success:function(e){m(e,c)}})}else{m(c.data("media"),c)}}s.wijtabs({alignment:"left",load:function(w,v){var u=a(v.panel).outerHeight(true)-a(v.panel).innerHeight();a(v.panel).height(l.height()-u)},disabledIndexes:b.newImg?[1]:[],show:function(v,u){a(u.panel).nosOnShow()}}).find(".wijmo-wijtabs-content").css({width:"81%",position:"relative"}).addClass("box-sizing-border").end().nosFormUI();h.triggerHandler("change");j.triggerHandler("change");if(!b.newImg){s.wijtabs("select",1).bind("wijtabsshow",function(){n.html(b.appdeskView)})}else{n.html(b.appdeskView)}})}});return a});