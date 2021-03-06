import { LoginUser as LoginUser_LoginUser } from './LoginUser/LoginUser.component';
import { Company as Company_Company } from './Company/Company.component';
import { Itur_hul as Itur_hul_Itur_hul } from './Itur_hul/Itur_hul.component';
import { Add_Record as Itur_hul_Add_Record_Add_Record } from './Itur_hul/Add_Record/Add_Record.component';
import { StartProgram as StartProgram_StartProgram } from './Main/StartProgram/StartProgram.component';

export const title = "";

export const magicGenCmpsHash = {               StartProgram_StartProgram:StartProgram_StartProgram,
                      Itur_hul_Add_Record_Add_Record:Itur_hul_Add_Record_Add_Record,
                      Company_Company:Company_Company,
              Itur_hul_Itur_hul:Itur_hul_Itur_hul,
                      LoginUser_LoginUser:LoginUser_LoginUser,
       
};

export const magicGenComponents = [ StartProgram_StartProgram ,  Itur_hul_Add_Record_Add_Record ,  Company_Company,
Itur_hul_Itur_hul ,  LoginUser_LoginUser 
];


export const LazyLoadModulesMap = { IturHulCrud_IturHulCrud : { moduleName : 'MagicMaintenanceModule',
                                          modulePath : 'src/app/magic/Maintenance/magic.gen.lib.module'},
  IturHul_IturHul : { moduleName : 'MagicMaintenanceModule',
                                          modulePath : 'src/app/magic/Maintenance/magic.gen.lib.module'},
 };