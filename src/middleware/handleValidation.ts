import {Request, Response, NextFunction} from "express"
import {validationResult} from "express-validator"

export const validate = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req)
    if(errors.isEmpty()) {
        return next()
    }
    const extractErrors: object[] =[]
    errors.array().map((err) => {
        extractErrors.push({[err.param]: err.msg})
    })
    return res.status(422).json({
        errors:extractErrors,
    })
}