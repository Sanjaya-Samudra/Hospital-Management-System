export class MedicalReport {
    public id: number = 0;
    public category: string;
    public pdfSrc: string;
    public localDateTime: string;
    public patientId: number;
    public adminId: number;
    public labNumber: number;

    constructor(category: string, pdfSrc: string, localDateTime: string, patientId: number, adminId: number, labNumber: number) {
        this.category = category;
        this.pdfSrc = pdfSrc;
        this.localDateTime = localDateTime;
        this.patientId = patientId;
        this.adminId = adminId;
        this.labNumber = labNumber;
    }
}