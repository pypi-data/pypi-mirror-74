from  lmf.gp.v1.etl_pxf import pg_to_gp



def test():
    #para={"distri":None,"pxf_partition":None,'external_only':False,"exclude_col":None,"rename":{},"drop":False}
    conp_src=['postgres','since2015','172.16.0.9','postgres','guangdong_qiye_zljianzhu']
    conp_dst=['gpadmin','since2015','172.16.0.10:5432','testdb','public']
    m=pg_to_gp(conp_src,conp_dst)
    m.copy('sist20180204.base1','dm.base3',distri='ztsfdm',pxf_partition="&PARTITION_BY=row_id:int&RANGE=1:5000000&INTERVAL=100000",exclude_col='row_id',drop=True)

