export interface evenementDto {
  id:      number;
  nom:     string;
  lieu:    string;
  date:    Date;
  nbPlace: number;

}
export interface EvenementPage {
  id:      number;
  nom:     string;
  lieu:    string;
  date:    Date;
  nbPlace: number;
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
 // content:evenementDto[];

}

