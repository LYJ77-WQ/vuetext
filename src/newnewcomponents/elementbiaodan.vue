<template>
    <div>
        <h1 class="name">饿了么表单</h1>
        <div class="form-container">
            <el-form ref="form" :model="form" label-width="140px">
                <el-form-item>
                    <template #label>
                        <span class="label-with-icon">
                            <el-icon>
                                <Edit />
                            </el-icon>
                            活动名称
                        </span>
                    </template>
                    <el-input v-model="form.name" placeholder="请输入活动名称" />
                </el-form-item>
                <el-form-item>
                    <template #label>
                        <span class="label-with-icon">
                            <el-icon>
                                <Location />
                            </el-icon>
                            活动区域
                        </span>
                    </template>
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai" />
                        <el-option label="区域二" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <template #label>
                        <span class="label-with-icon">
                            <el-icon>
                                <Clock />
                            </el-icon>
                            活动时间
                        </span>
                    </template>
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;" />
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;" />
                    </el-col>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>