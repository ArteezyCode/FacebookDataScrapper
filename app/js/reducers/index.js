import { combineReducers } from 'redux';
import $ from 'jquery';
import Parser from '../Bot';

let jQuery = $;
!function(a,b,c,d){function e(b,c){this.element=b,this.settings=a.extend({},k,c),this._defaults=k,this._name=j,this.init()}function f(a){return a.filename?a.filename:"table2excel"}function g(a){var b=/(\s+alt\s*=\s*"([^"]*)"|\s+alt\s*=\s*'([^']*)')/i;return a.replace(/<img[^>]*>/gi,function(a){var c=b.exec(a);return null!==c&&c.length>=2?c[2]:""})}function h(a){return a.replace(/<a[^>]*>|<\/a>/gi,"")}function i(a){var b=/(\s+value\s*=\s*"([^"]*)"|\s+value\s*=\s*'([^']*)')/i;return a.replace(/<input[^>]*>|<\/input>/gi,function(a){var c=b.exec(a);return null!==c&&c.length>=2?c[2]:""})}var j="table2excel",k={exclude:".noExl",name:"Table2Excel",filename:"table2excel",fileext:".xls",exclude_img:!0,exclude_links:!0,exclude_inputs:!0};e.prototype={init:function(){var b=this;b.template={head:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head>\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets>',sheet:{head:"<x:ExcelWorksheet><x:Name>",tail:"</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>"},mid:"</x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body>",table:{head:"<table>",tail:"</table>"},foot:"</body></html>"},b.tableRows=[],a(b.element).each(function(c,d){var e="";a(d).find("tr").not(b.settings.exclude).each(function(c,d){e+="<tr>",a(d).find("td,th").not(b.settings.exclude).each(function(c,d){var f={rows:a(this).attr("rowspan"),cols:a(this).attr("colspan"),flag:a(d).find(b.settings.exclude)};f.flag.length>0?e+="<td> </td>":f.rows&f.cols?e+="<td>"+a(d).html()+"</td>":(e+="<td",f.rows>0&&(e+=" rowspan='"+f.rows+"' "),f.cols>0&&(e+=" colspan='"+f.cols+"' "),e+="/>"+a(d).html()+"</td>")}),e+="</tr>",console.log(e)}),b.settings.exclude_img&&(e=g(e)),b.settings.exclude_links&&(e=h(e)),b.settings.exclude_inputs&&(e=i(e)),b.tableRows.push(e)}),b.tableToExcel(b.tableRows,b.settings.name,b.settings.sheetName)},tableToExcel:function(d,e,g){var h,i,j,k=this,l="";if(k.format=function(a,b){return a.replace(/{(\w+)}/g,function(a,c){return b[c]})},g=void 0===g?"Sheet":g,k.ctx={worksheet:e||"Worksheet",table:d,sheetName:g},l=k.template.head,a.isArray(d))for(h in d)l+=k.template.sheet.head+g+h+k.template.sheet.tail;if(l+=k.template.mid,a.isArray(d))for(h in d)l+=k.template.table.head+"{table"+h+"}"+k.template.table.tail;l+=k.template.foot;for(h in d)k.ctx["table"+h]=d[h];if(delete k.ctx.table,!c.documentMode){var m=new Blob([k.format(l,k.ctx)],{type:"application/vnd.ms-excel"});b.URL=b.URL||b.webkitURL,i=b.URL.createObjectURL(m),j=c.createElement("a"),j.download=f(k.settings),j.href=i,c.body.appendChild(j),j.click(),c.body.removeChild(j)}else if("undefined"!=typeof Blob){l=k.format(l,k.ctx),l=[l];var n=new Blob(l,{type:"text/html"});b.navigator.msSaveBlob(n,f(k.settings))}else txtArea1.document.open("text/html","replace"),txtArea1.document.write(k.format(l,k.ctx)),txtArea1.document.close(),txtArea1.focus(),sa=txtArea1.document.execCommand("SaveAs",!0,f(k.settings));return!0}},a.fn[j]=function(b){var c=this;return c.each(function(){a.data(c,"plugin_"+j)||a.data(c,"plugin_"+j,new e(this,b))}),c}}(jQuery,window,document);

let TRIAL_VERSION = false;


function usersDataReducer(state = [], action) {
  switch (action.type) {
    case 'SET_DATA':
      return action.payload;
    default:
      return state;
  }
}

const viewSettingsInitialState = {
  firstname: true,
  lastname: true,
  company: true,
  position: true,
  url: true,
  onlyComplete: true
};

function viewSettingsReducer(state = viewSettingsInitialState, action) {
  switch (action.type) {
    case 'VIEW_TOGGLE_FIRSTNAME':
      return {
        ...state,
        firstname: !state.firstname
      };
    case 'VIEW_TOGGLE_LASTNAME':
      return {
        ...state,
        lastname: !state.lastname
      };
    case 'VIEW_TOGGLE_COMPANY':
      return {
        ...state,
        company: !state.company
      };
    case 'VIEW_TOGGLE_POSITION':
      return {
        ...state,
        position: !state.position
      };
    case 'VIEW_TOGGLE_URL':
      return {
        ...state,
        url: !state.url
      };
    case 'VIEW_TOGGLE_ONLYCOMPLETE':
      return {
        ...state,
        onlyComplete: !state.onlyComplete
      };
    default:
      return state;
  }
}

const importSettingsInitialState = {
  firstname: true,
  lastname: true,
  company: true,
  position: true,
  url: true,
  onlyComplete: true
};

function importSettingsReducer(state = importSettingsInitialState, action) {
  switch (action.type) {
    case 'IMPORT_TOGGLE_FIRSTNAME':
      return {
        ...state,
        firstname: !state.firstname
      };
    case 'IMPORT_TOGGLE_LASTNAME':
      return {
        ...state,
        lastname: !state.lastname
      };
    case 'IMPORT_TOGGLE_COMPANY':
      return {
        ...state,
        company: !state.company
      };
    case 'IMPORT_TOGGLE_POSITION':
      return {
        ...state,
        position: !state.position
      };
    case 'IMPORT_TOGGLE_URL':
      return {
        ...state,
        url: !state.url
      };
    case 'IMPORT_TOGGLE_ONLYCOMPLETE':
      return {
        ...state,
        onlyComplete: !state.onlyComplete
      };
    default:
      return state;
  }
}
const botDataInitialState = {
  dataArray: [],
  complete: 0,
  work: false
};

function trialRediucer(state = false, action) {
  switch(action.type) {
    case 'TRIAL_VERSION':
      TRIAL_VERSION = true;
      return true;
    default:
      return state;
  }
}

function botDataReducer(state = botDataInitialState, action) {
  switch (action.type) {
    case 'START_PARSE':
      if(/facebook.com\/search/.test(document.URL)) {
        Parser.getDataSearchList();
      } else {
        Parser.getDataGroupList();
      }
      return {
        ...state,
        dataArray: [],
        work: !state.work
      };
    case 'STOP_PARSE':
      const { dataArray, complete } = Parser.clrInterval();
      console.log('complete', complete);
      if(TRIAL_VERSION) {
        if(dataArray.length > 300) dataArray.length = 300;
      }
      return {
        dataArray,
        complete,
        work: false
      };
    case 'DOWNLOAD_CSV':
      console.log('DOWNLOAD_CSV')
      $('#rooot #mytable').table2excel({
        exclude: '#noNeed',
        name: 'My',
        filename: 'test'
      });
      return state;
    default:
      return state;
  }
}

const appReducers = combineReducers({
  userData: usersDataReducer,
  viewSettings: viewSettingsReducer,
  importSettings: importSettingsReducer,
  botData: botDataReducer,
  trial: trialRediucer
});

export default appReducers;