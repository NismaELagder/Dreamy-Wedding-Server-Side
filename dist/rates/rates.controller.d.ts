import { RatesService } from './rates.service';
import { AuthType } from 'src/helpers/types/auth.type';
import { CreateRateDto } from './dto/create-rate.dto';
export declare class RatesController {
    private readonly rateService;
    constructor(rateService: RatesService);
    create(auth: AuthType, productId: string, createRateDto: CreateRateDto): Promise<import("mongodb").UpdateResult>;
}
