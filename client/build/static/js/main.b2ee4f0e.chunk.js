(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a(303)},113:function(e,t,a){},115:function(e,t,a){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),i=a.n(s),o=(a(113),a(18)),l=a(19),c=a(24),m=a(23),u=a(25),h=a(306),g=(a(115),a(100)),d=a.n(g),p=a(102),f=a.n(p),v=a(33),b=a.n(v),E=a(304),j=function(e){return r.a.createElement("div",null,r.a.createElement(d.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(b.a,{component:E.a,to:"/",variant:"title",color:"inherit"},e.Title))))},y=a(38),O=a.n(y),w=a(27),x=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.classes;return r.a.createElement("div",null,r.a.createElement(j,{Title:"MedGo"}),r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.buttons},r.a.createElement(O.a,{component:E.a,to:"/postmessage"},"Post New Message"),r.a.createElement(O.a,{component:E.a,to:"/viewmessages"},"Check Messages")),t))}}]),t}(n.Component),N=Object(w.withStyles)({container:{marginTop:"20vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},buttons:{display:"flex",flexDirection:"row"}})(x),C=a(21),k=a(103),S=a.n(k),M="https://medgo-yaaham.herokuapp.com/",T=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"postData",value:function(e,t){S.a.post(M+t,e).then(function(e){console.log(e,"Message added!")}).catch(function(e){console.log(e,"Message not added, try again")})}},{key:"GetData",value:function(e){return fetch(M+e).then(function(e){return e.json()})}}]),e}(),D=a(63),F=a.n(D),A=a(104),G=a.n(A),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={name:"",message:"",time:"",errorText:"",nameError:!1,messageError:!1},a.handleSubmit=a.handleSubmit.bind(Object(C.a)(Object(C.a)(a))),a.handleMessageChange=a.handleMessageChange.bind(Object(C.a)(Object(C.a)(a))),a.handleNameChange=a.handleNameChange.bind(Object(C.a)(Object(C.a)(a))),a.helper=new T,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleMessageChange",value:function(e){e.target.value.length>0?this.setState({message:e.target.value,errorText:"",messageError:!1}):this.setState({message:e.target.value,errorText:"Empty Field Not Allowed",messageError:!0})}},{key:"handleNameChange",value:function(e){e.target.value.length>0?this.setState({name:e.target.value,errorText:"",nameError:!1}):this.setState({name:e.target.value,errorText:"Empty Field Not Allowed",nameError:!0})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),console.log("submitting"),""===this.state.name||""===this.state.message)this.setState({errorText:"Empty Field Not Allowed",nameError:!0,messageError:!0});else{var t={name:this.state.name,message:this.state.message,time:G.a};JSON.stringify(t),this.helper.postData(t,"form"),this.setState({name:"",message:""})}}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("form",{className:e.container,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("div",{className:e.field},r.a.createElement(F.a,{error:this.state.nameError,id:"Email",label:"Email",className:e.textField,value:this.state.name,onChange:this.handleNameChange,margin:"normal",variant:"outlined",helperText:this.state.errorText})),r.a.createElement("div",{className:e.field},r.a.createElement(F.a,{error:this.state.messageError,id:"Message",label:"Message",multiline:!0,rows:"4",className:e.textField,value:this.state.message,onChange:this.handleMessageChange,margin:"normal",variant:"outlined",helperText:this.state.errorText})),r.a.createElement(O.a,{variant:"contained",type:"submit",className:e.button},"Submit")))}}]),t}(n.Component),W=Object(w.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"5vh"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},field:{display:"flex",alignItems:"center"},dense:{marginTop:16},menu:{width:200}}})(I),B=a(105),J=a.n(B),L=a(106),P=a.n(L),R=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={messages:[]},a.helper=new T,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.helper.GetData("form").then(function(t){e.setState({messages:t})})}},{key:"renderMessages",value:function(){var e=this.props.classes;return this.state.messages.map(function(t){return console.log(t),r.a.createElement("div",{key:t._id,className:"messages"},r.a.createElement(J.a,{className:e.card},r.a.createElement(P.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Username : ",t.name),r.a.createElement(b.a,{variant:"h5",component:"h2"},"Message : ",t.message))))})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.container},r.a.createElement(b.a,{className:e.text,variant:"h6",component:"h2"},"Guest Messages"),r.a.createElement("div",{className:"guestdataContainer"},this.renderMessages()))}}]),t}(n.Component),U=Object(w.withStyles)({container:{marginTop:"5vh"},card:{minWidth:275,margin:"5%"},text:{textAlign:"center"}})(R),V=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement(h.a,{path:"/postmessage",component:W}),r.a.createElement(h.a,{path:"/viewmessages",component:U})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(305);i.a.render(r.a.createElement($.a,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,2,1]]]);
//# sourceMappingURL=main.b2ee4f0e.chunk.js.map