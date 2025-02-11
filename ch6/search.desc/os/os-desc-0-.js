searchState.loadedDescShard("os", 0, "The main module and entrypoint\nclear BSS segment\nConstants used in rCore\nSBI console driver, for text output\nFile system in os\nThe panic handler\nMemory management implementation\nprint string macro\nprintln string macro\nthe rust entry-point of os\nSBI call wrappers\nSynchronization and interior mutability primitives\nImplementation of syscalls\nTask management implementation\nRISC-V timer-related functionality\nTrap handling functionality\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nFile trait\nA wrapper around a filesystem inode to implement File …\nOpen file flags\nStandard input\nStandard output\n<code>Arc&lt;Inode&gt;</code> -&gt; <code>OSInodeInner</code>: In order to open files …\nList all files in the filesystems\nOpen file with flags\nRead file to <code>UserBuffer</code>\nIf readable\nStdin &amp; Stdout\nIf writable\nWrite <code>UserBuffer</code> to file\nAllow create\nA wrapper around a filesystem inode to implement File …\nThe OS inode inner in ‘UPSafeCell’\nOpen file flags\nRead only\nRead &amp; Write\nClear file and return an empty one\nWrite only\nReturns the set containing all flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nList all files in the filesystems\nConstruct an OS inode from a inode\nReturns the complement of this set of flags.\nOpen file with flags\nRead all data inside a inode into vector\nDo not check validity for simplicity Return (readable, …\nRemoves the specified flags in-place.\nInserts or removes the specified flags depending on the …\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nToggles the specified flags in-place.\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nStandard input\nStandard output\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nmanage a frame which has the same lifecycle as the tracker\na memory set instance through lazy_static! managing kernel …\nmap permission corresponding to that in pte: <code>R W X U</code>\nmemory set structure, controls virtual-memory space\nRecord root ppn and has the same lifetime as 1 and 2 level …\npage table entry structure\nDefinitions\nphiscal page number\nAdd value by one\nArray of u8 slice that user communicate with os\nIterator of <code>UserBuffer</code>\nvirtual address\nvirtual page number\nImplementation of physical and virtual address and page …\nPTE\nU8 vec\nallocate a frame\nImplementation of <code>FrameAllocator</code> which controls all the …\ndeallocate a frame\nThe global allocator\ninitiate heap allocator, frame allocator and kernel space\nGet kernelspace root ppn\nImplementation of <code>MapArea</code> and <code>MemorySet</code>.\nImplementation of <code>PageTableEntry</code> and <code>PageTable</code>.\nCheck PageTable running correctly\nAdd value by one\nTranslate a pointer to a mutable u8 Vec through page table\nTranslate a generic through page table and return a …\nTranslate a generic through page table and return a …\nTranslate a pointer to a mutable u8 Vec end with <code>\\0</code> …\nDefinitions\nphiscal page number\na simple range structure for type T\niterator for the simple range structure\nAdd value by one\na simple range structure for virtual page number\nvirtual address\nvirtual page number\nCheck page aligned\nCheck page aligned\n<code>PhysAddr</code>-&gt;<code>PhysPageNum</code>\n<code>VirtAddr</code>-&gt;<code>VirtPageNum</code>\n<code>PhysAddr</code>-&gt;<code>PhysPageNum</code>\n<code>VirtAddr</code>-&gt;<code>VirtPageNum</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet u8 array on <code>PhysPageNum</code>\nGet mutable reference to <code>PhysAddr</code> value\nGet Get mutable reference to <code>PhysAddr</code> value on <code>PhysPageNum</code>\nGet <code>PageTableEntry</code> on <code>PhysPageNum</code>\nGet reference to <code>PhysAddr</code> value\nReturn VPN 3 level index\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet page offset\nGet page offset\nAdd value by one\nframe allocator instance through lazy_static!\nmanage a frame which has the same lifecycle as the tracker\nan implementation for frame allocator\nallocate a frame\na simple test for frame allocator\ndeallocate a frame\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\ninitiate the frame allocator using <code>ekernel</code> and <code>MEMORY_END</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate an empty <code>FrameTracker</code>\nheap allocator instance\nheap space ([u8; KERNEL_HEAP_SIZE])\npanic when heap allocation error occurs\ninitiate heap allocator\na memory set instance through lazy_static! managing kernel …\nmap area structure, controls a contiguous piece of virtual …\nmap permission corresponding to that in pte: <code>R W X U</code>\nmap type for memory set: identical or framed\nmemory set structure, controls virtual-memory space\nReadable\nAccessible in U mode\nWritable\nExcutable\nRefresh TLB with <code>sfence.vma</code>\nReturns the set containing all flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\ndata: start-aligned but maybe with shorter length assume …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nInclude sections in elf and trampoline and TrapContext and …\nClone a same <code>MemorySet</code>\nInserts the specified flags in-place.\nAssume that no conflicts.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nGet kernelspace root ppn\nMention that trampoline is not collected by areas.\nCreate an empty <code>MemorySet</code>\nWithout kernel stacks.\nReturns the complement of this set of flags.\nRemove all <code>MapArea</code>\nCheck PageTable running correctly\nRemoves the specified flags in-place.\nRemove <code>MapArea</code> that starts with <code>start_vpn</code>\nInserts or removes the specified flags depending on the …\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nToggles the specified flags in-place.\nGet pagetable <code>root_ppn</code>\nTranslate throuth pagetable\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nRecord root ppn and has the same lifetime as 1 and 2 level …\npage table entry structure\nArray of u8 slice that user communicate with os\nIterator of <code>UserBuffer</code>\nReturns the set containing all flags.\nReturns the intersection between the two sets of flags.\nDisables all flags disabled in the set.\nReturns the union of the two sets of flags.\nAdds the set of flags.\nReturns the raw value of the flags currently stored.\nPTE\nReturns the left flags, but with all the right flags …\nToggles the set of flags.\nU8 vec\nReturns the complement of this set of flags.\nReturns <code>true</code> if all of the flags in <code>other</code> are contained …\nReturns the difference between the flags in <code>self</code> and <code>other</code>.\nReturns an empty set of flags.\nReturn an empty PTE\nCheck PTE executable\nFind phsical address by virtual address\nFind phsical address by virtual address, create a frame if …\nReturn 10bit flag\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from underlying bit representation, unless that …\nConvert from underlying bit representation, dropping any …\nConvert from underlying bit representation, preserving all …\nTemporarily used to get arguments from user space.\nInserts the specified flags in-place.\nReturns the intersection between the flags in <code>self</code> and …\nReturns <code>true</code> if there are flags common to both <code>self</code> and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if all flags are currently set.\nReturns <code>true</code> if no flags are currently stored.\nCheck PTE valid\nLength of <code>UserBuffer</code>\nCreate a mapping form <code>vpn</code> to <code>ppn</code>\nCreate an empty <code>PageTable</code>\nCreate a <code>UserBuffer</code> by parameter\nCreate a PTE from ppn\nReturns the complement of this set of flags.\nReturn 44bit ppn\nCheck PTE readable\nRemoves the specified flags in-place.\nInserts or removes the specified flags depending on the …\nReturns the set difference of the two sets of flags.\nDisables all flags enabled in the set.\nReturns the symmetric difference between the flags in <code>self</code> …\nToggles the specified flags in-place.\nGet root ppn\nTranslate <code>VirtPageNum</code> to <code>PageTableEntry</code>\nTranslate <code>VirtAddr</code> to <code>PhysAddr</code>\nTranslate a pointer to a mutable u8 Vec through page table\nTranslate a generic through page table and return a …\nTranslate a generic through page table and return a …\nTranslate a pointer to a mutable u8 Vec end with <code>\\0</code> …\nReturns the union of between the flags in <code>self</code> and <code>other</code>.\nDelete a mapping form <code>vpn</code>\nCheck PTE writable\nuse sbi call to getchar from console (qemu uart handler)\nuse sbi call to putchar in console (qemu uart handler)\nuse sbi call to set timer\nuse sbi call to shutdown the kernel\nWrap a static data structure inside it so that we are able …\ninner data\nUniprocessor interior mutability primitives\nWrap a static data structure inside it so that we are able …\nExclusive access inner data in UPSafeCell. Panic if the …\nReturns the argument unchanged.\ninner data\nCalls <code>U::from(self)</code>.\nUser is responsible to guarantee that inner struct is only …\nFile and filesystem-related syscalls\nhandle syscall exception with <code>syscall_id</code> and other …\nIf there is not a child process whose pid is same as …\npid of usertests app in make run TEST=1\nGloble process that init user shell\nKernelstack for app\nPid Allocator struct\nBind pid lifetime to <code>PidHandle</code>\nProcessor management structure\ntask context structure containing some registers\nA array of <code>TaskControlBlock</code> that is thread-safe\nAdd init process to the manager\nInterface offered to add task\nImplementation of <code>TaskContext</code>\nThe task currently executing on the current processor\nGet running task\nGet the mutable reference to trap context of current task\nGet token of the address space of current task\nExit the current ‘Running’ task and run the next task …\nInterface offered to pop the first task\nReturns the argument unchanged.\nThe basic control flow of each core, helping to select and …\nCalls <code>U::from(self)</code>.\nImplementation of <code>TaskManager</code>\nImplementation of <code>PidAllocator</code>\nAllocate a pid from PID_ALLOCATOR\nImplementation of <code>Processor</code> and Intersection of control …\nreturn address ( e.g. __restore ) of __switch ASM function\nThe main part of process execution and scheduling Loop …\ns0-11 register, callee saved\nReturn to idle control flow for new scheduling\nkernel stack pointer of app\nSuspend the current ‘Running’ task and run the next …\nWrap <code>switch.S</code> as a function\nTake the current task,leaving a None in its place\nImplementation of <code>TaskControlBlock</code>\ntask context structure containing some registers\nReturns the argument unchanged.\nset Task Context{__restore ASM funciton: trap_return, sp: …\nCalls <code>U::from(self)</code>.\nreturn address ( e.g. __restore ) of __switch ASM function\ns0-11 register, callee saved\nkernel stack pointer of app\ninit task context\nA array of <code>TaskControlBlock</code> that is thread-safe\nAdd a task to <code>TaskManager</code>\nInterface offered to add task\nRemove the first task and return it,or <code>None</code> if <code>TaskManager</code> …\nInterface offered to pop the first task\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreat an empty TaskManager\nKernelstack for app\nPid Allocator struct\nBind pid lifetime to <code>PidHandle</code>\nAllocate a pid\nRecycle a pid\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the value on the top of kernelstack\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn (bottom, top) of a kernel stack in kernel space.\nCreate an empty <code>PidAllocator</code>\nCreate a kernelstack from pid\nAllocate a pid from PID_ALLOCATOR\nPush a value on top of kernelstack\nProcessor management structure\nGet current task in cloning semanteme\nThe task currently executing on the current processor\nGet running task\nGet the mutable reference to trap context of current task\nGet token of the address space of current task\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet mutable reference to <code>idle_task_cx</code>\nThe basic control flow of each core, helping to select and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate an empty Processor\nThe main part of process execution and scheduling Loop …\nReturn to idle control flow for new scheduling\nGet current task in moving semanteme\nTake the current task,leaving a None in its place\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nget current time\nget current time in microseconds\nset the next timer interrupt\ntrap context structure containing sstatus, sepc and …\nImplementation of <code>TrapContext</code>\nenable timer interrupt in sie CSR\ninitialize CSR <code>stvec</code> as the entry of <code>__alltraps</code>\nAddr of Page Table\nkernel stack\nCSR sepc\nCSR sstatus      \nUnimplement: traps/interrupts/exceptions from kernel mode …\nhandle an interrupt, exception, or system call from user …\nAddr of trap_handler function\nset the new addr of __restore asm function in TRAMPOLINE …\ngeneral regs[0..31]\ntrap context structure containing sstatus, sepc and …\ninit app context\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAddr of Page Table\nkernel stack\nCSR sepc\nset stack pointer to x_2 reg (sp)\nCSR sstatus      \nAddr of trap_handler function\ngeneral regs[0..31]")