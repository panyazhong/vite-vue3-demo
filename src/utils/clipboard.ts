import { message } from 'ant-design-vue';
import Clipboard from 'clipboard';

function clipboardSuccess() {
  message.success('clipboard success');
}

function clipboardError() {
  message.error('clipboard error');
}

export default function handleClipboard(text: any, event: any) {
  let funcText = function (text: any): any {
    return text;
  };

  const clipboard: any = new Clipboard(event.target, {
    text: funcText(text),
  });

  clipboard.on('success', async (params: any) => {
    clipboardSuccess();
    clipboard.destroy();
  });

  clipboard.on('error', function (error: any) {
    clipboardError();
    clipboard.destroy();
  });

  clipboard.onClick(event);
}
