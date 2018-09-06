import { BehaviorSubject } from 'rxjs';

export class Document {

  value: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    public collectionName: string,
    public documentId: string
  ) {}
}
