import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { CourseStatus } from "src/shared/enums/status.enums";

export class CreateCourseDto {
    @ApiProperty({
        example: '',
        type: String,
        description: 'Course categoryId'
    })
    category_id?:string;

    @ApiProperty({
        example: '',
        type: String,
        description: 'Course ratingId'
    })
    rating_id?:string;

    @IsNotEmpty()
    @ApiProperty({
        example: 'Building body for Arm-wrestling',
        type:String,
        description: 'Course Title'
    })
    title:string;
    
    @IsNotEmpty()
    @ApiProperty({
        example: 'Arm-wrestling is one of the most powerful competetive in the world where is every single country want to compete how strong they are.',
        type:String,
        description: 'Course description'
    })
    description:string;

    @IsNotEmpty()
    @ApiProperty({
        example: 800,
        type:Number,
        description: 'Course price'
    })
    price:number;

    @IsNotEmpty()
    @ApiProperty({
        example: 30,
        type:Number,
        description: 'Course duration (day)'
    })
    duration:number;

    @ApiProperty({
        example: 'Thumbnail.jpg',
        type:String,
        description: 'Course thumbnail'
    })
    thumbnail?:string;

    @IsNotEmpty()
    @IsEnum(CourseStatus, {
        message :`Invalid Status. Status should be ${CourseStatus.DRAFT}, ${CourseStatus.AVAILABLE}, ${CourseStatus.UNAVAILABLE}`
    })
    @ApiProperty({
        example: CourseStatus.DRAFT,
        type:String,
        description: 'Course Status',
        enum: CourseStatus
    })
    status:string;
}