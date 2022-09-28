export class Group {
    GroupId!: number;
    GroupName!: string;
    OrganizationName!: string;
    SponsorName!: string;
    SponsorPhone!: string;
    SponsorEmail!: string;
    MaxGroupSize!: number;
    Members!: {
        MemberId: number;
        MemberEmail: string;
        MemberName: string;
        MemberPhone: string;
    }
}
