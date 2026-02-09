export interface Payment
{
  amount: string;
  method: string;
  status: string;
  currency: string;
  external_ref: string;
};