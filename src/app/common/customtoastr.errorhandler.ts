import { Injectable, Injector } from '@angular/core';
import { ErrorHandler  } from '@angular/core';
import { ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class CustomToastrErrorHandler implements ErrorHandler {
private _toasterEnabled= false;
private _options: ToastOptions;


 constructor( private injector: Injector ) {
   this._options = new ToastOptions();
   this._options.showCloseButton = true;
   this._options.positionClass = 'toast-bottom-right';
 }
public get Toastr(): ToastsManager {
     return this.injector.get(ToastsManager);
  }
  handleError(error: any): void {
    const originalError = this._findOriginalError(error);
    const originalStack = this._findOriginalStack(error);
    const exceptionValue = `ORIGINAL EXCEPTION: ${this._extractMessage(originalError)}`;
    const stackTraceValue = `ORIGINAL STACKTRACE: ${originalStack}`;

    if (this._toasterEnabled) {
      this.Toastr.error(exceptionValue, 'Error', this._options);
      this.Toastr.error(stackTraceValue, 'Error', this._options);
    }
    if (exceptionValue) {
      console.error(exceptionValue );
    }
    if (stackTraceValue) {
      console.error(stackTraceValue );
    }

  }

 _extractMessage(error: any): string {
    return error instanceof Error ? error.message : '';
  }

  _findOriginalError(error: any): any {
    const e = (error as Error).stack;
    return e;
  }
  _findOriginalStack(error: any): string {
    if (!(error instanceof Error)) {
    return null;
    }

    const e: any = error;
    const stack: string = e.stack;
    return stack;
  }
}

