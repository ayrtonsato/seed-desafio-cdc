export class UniqueConstraintDbError extends Error {
    constructor(msg: string) {
        super(msg)
    }
}