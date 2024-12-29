export class ErrorUtil{
    static handleError(error:unknown): string{
        if(error instanceof Error){
            return error.message;
        }
        return 'Um erro inesperado ocorreu 😿'
    }
}