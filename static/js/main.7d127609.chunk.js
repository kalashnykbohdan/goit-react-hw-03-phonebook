(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={BthDelete:"contactList_BthDelete__3dEK-"}},13:function(t,e,n){t.exports=n(18)},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(9),r=n.n(o),l=n(12),s=n(3),u=n(4),i=n(6),m=n(5);function p(t){var e=t.title,n=t.children;return c.a.createElement("section",null,e&&c.a.createElement("h2",null,e),n)}p.defaultProps={title:""};var b=p,h=n(10),f=n.n(h),d=function(t){var e=t.contacts,n=t.onRemoveContact;return c.a.createElement("ul",null,e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement("li",{key:a},c.a.createElement("span",null,a," : ",o),c.a.createElement("button",{type:"button",className:f.a.BthDelete,onClick:function(){return n(e)}},"Delete"))})))},v=n(11),E=n(2),C=n.n(E),g=n(1),_=(n(8),function(t){Object(i.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),""===t.state.name||""===t.state.number?new g.a("\u041d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u0438\u043c\u044f, \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430!",g.a.TYPE_ERROR,g.a.TIME_NORMAL):t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:C.a.contactForm,onSubmit:this.handleSubmit},c.a.createElement("label",null,c.a.createElement("p",{className:C.a.p_label},"Name"),c.a.createElement("input",{className:"Name-input",type:"text",value:e,onChange:this.handleChange,name:"name"})),c.a.createElement("p",{className:C.a.p_label},"Namber"),c.a.createElement("input",{className:"Number-input",type:"tel",value:n,onChange:this.handleChange,name:"number"}),c.a.createElement("br",null),c.a.createElement("button",{type:"submit",className:C.a.submit_form},"Add contact"))}}]),n}(a.Component));function S(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("input",{type:"text",className:"TaskEditor-input",value:e,onChange:function(t){return n(t.target.value)}}))}var O=function(t){Object(i.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{name:"Rosie Simpson",number:"459-12-56"},{name:"Hermione Kline",number:"443-89-12"},{name:"Eden Clements",number:"645-17-79"},{name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={name:e,number:n},c=t.state.contacts.map((function(t){return t.name})).includes(e);t.setState((function(t){if(!c)return{contacts:[].concat(Object(l.a)(t.contacts),[a])};new g.a("".concat(e," is already in contacts"),g.a.TYPE_ERROR,g.a.TIME_NORMAL)}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleSubmit=function(e){e.preventDefault(),""===t.state.name||""===t.state.number?new g.a("\u041d\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043e \u0438\u043c\u044f, \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430!",g.a.TYPE_ERROR,g.a.TIME_NORMAL):t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Contacts componentDidMount");var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){console.log("Contacts componentDidUpdate"),console.log("prevState: ",e),console.log("this.state: ",this.state),e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return c.a.createElement(b,{title:"Phonebook"},c.a.createElement(_,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(S,{value:t,onChangeFilter:this.changeFilter}),e.length>0&&c.a.createElement(d,{contacts:e,onRemoveContact:this.removeContact}))}}]),n}(a.Component);r.a.render(c.a.createElement(O,null),document.querySelector("#root"))},2:function(t,e,n){t.exports={contactForm:"contactForm_contactForm__2c9xY",submit_form:"contactForm_submit_form__1qYZD",p_label:"contactForm_p_label__34Suo"}}},[[13,1,2]]]);
//# sourceMappingURL=main.7d127609.chunk.js.map