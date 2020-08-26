import {Router} from 'express';

export interface IService {
    path: string,
    router: Router,
}