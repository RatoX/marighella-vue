import Vue from 'vue';
import Vueditor from 'vueditor'
import 'vueditor/dist/style/vueditor.min.css'

let config = {
  toolbar: [
    'removeFormat',
    '|',
    'elements',
    'fontName',
    'fontSize',
    '|',
    'bold',
    'italic',
    'underline',
    'links',
    '|',
    'justifyLeft',
    'justifyCenter',
    'justifyRight',
    'justifyFull',
    '|',
    'indent',
    'outdent',
    'insertOrderedList',
    'insertUnorderedList',
    '|',
    'picture',
    'tables',
  ],
  fontName: [
    {val: 'Helvetica'},
  ],
  fontSize: ['12px', '14px', '16px', '18px'],
  uploadUrl: '',
};

Vue.use(Vueditor, config);
